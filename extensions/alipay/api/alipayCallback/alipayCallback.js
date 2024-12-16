const { select, update } = require('@evershop/postgres-query-builder');
const smallestUnit = require('zero-decimal-currencies');
const Alipay = require('../../services/alipaySDK');
const { pool } = require('@evershop/evershop/src/lib/postgres/connection');
const { emit } = require('@evershop/evershop/src/lib/event/emitter');

const {
  OK,
  INVALID_PAYLOAD
} = require('@evershop/evershop/src/lib/util/httpStatus');
const { getSetting } = require('@evershop/evershop/src/modules/setting/services/setting');

// eslint-disable-next-line no-unused-vars
module.exports = async (request, response, delegate, next) => {

  const alipayAppId = await getSetting('alipayAppId', );
  const alipayPrivateKey =  await getSetting('alipayPrivateKey', );
  const alipayPublicKey =  await getSetting('alipayPublicKey', );
  const alipayGateway = await getSetting('alipayGateway', );

  const alipay = new Alipay({
    appId: alipayAppId,
    privateKey: alipayPrivateKey,
    alipayPublicKey: alipayPublicKey,
    gateway: alipayGateway,
  })

  const result = alipay.checkNotifySign(request.body);
  if(!result){
    response.status(INVALID_PAYLOAD).send('Invalid order');
    return
  }

  const { out_trade_no,trade_status } = request.body;

  // 如果已经支付成功，直接返回
  const isPaid = await select()
    .from('order')
    .where('uuid', '=', out_trade_no)
    .and('payment_method', '=', 'alipay')
    .and('payment_status', '=', 'paid')
    .load(pool);

  if(isPaid){
    response.status(OK).send('success');
    return
  }
  
  // 如果支付失败，更新订单状态
  if(trade_status !== 'TRADE_SUCCESS'){
    await update('order')
    .given({ payment_status: 'failed' })
    .where('uuid', '=', out_trade_no)
    .and('payment_method', '=', 'alipay')
    .and('payment_status', '=', 'pending')
    .execute(pool);

    response.status(OK).send('success');
    return
  }

  // 如果支付成功，更新订单状态
  const order = await select()
    .from('order')
    .where('uuid', '=', out_trade_no)
    .and('payment_method', '=', 'alipay')
    .and('payment_status', '=', 'pending')
    .load(pool);

  if (!order) {
    response.status(INVALID_PAYLOAD);
    response.json({
      error: {
        status: INVALID_PAYLOAD,
        message: 'Invalid order'
      }
    });
    return
  }else{

      await update('order')
      .given({ payment_status: 'paid' })
      .where('uuid', '=', out_trade_no)
      .and('payment_method', '=', 'alipay')
      .and('payment_status', '=', 'pending')
      .execute(pool);

      await emit('order_placed', {
          ...order
      });

      response.status(OK).send('success');
  }
  
};
