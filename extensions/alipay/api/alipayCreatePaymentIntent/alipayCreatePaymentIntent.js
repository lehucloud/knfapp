const { select } = require('@evershop/postgres-query-builder');
const smallestUnit = require('zero-decimal-currencies');
const Alipay = require('../../services/alipaySDK');
const { pool } = require('@evershop/evershop/src/lib/postgres/connection');
const {
  OK,
  INVALID_PAYLOAD
} = require('@evershop/evershop/src/lib/util/httpStatus');
const { getSetting } = require('@evershop/evershop/src/modules/setting/services/setting');

// eslint-disable-next-line no-unused-vars
module.exports = async (request, response, delegate, next) => {

  // eslint-disable-next-line camelcase
  const { order_id,payEnvironment } = request.body;
  
  // Check the order
  const order = await select()
    .from('order')
    .where('uuid', '=', order_id)
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
  } else {
    
    const alipayAppId = await getSetting('alipayAppId', );
    const alipayPrivateKey =  await getSetting('alipayPrivateKey', );
    const alipayPublicKey =  await getSetting('alipayPublicKey', );
    const alipayGateway = await getSetting('alipayGateway', );
    const alipayNotifyUrl = await getSetting('alipayNotifyUrl', );
    const alipayReturnUrl =  await getSetting('alipayReturnUrl', );

    const alipay = new Alipay({
      appId: alipayAppId,
      privateKey: alipayPrivateKey,
      alipayPublicKey: alipayPublicKey,
      gateway: alipayGateway,
      notifyUrl: alipayNotifyUrl,
      returnUrl: alipayReturnUrl+order_id
    })

    const params = {
      orderId: order_id,
      amount: "0.01",
      description: 'Evershop Order'
    }

    let data;
    switch (payEnvironment) {
      case 'pc':
        data = await alipay.pcpay(params)
        break;
      case 'mobile':
        data = await alipay.h5pay(params)
        break;
      default:
        data = await alipay.pcpay(params)
        break;
    }

    response.status(OK);
    response.json({
      data: data
    });  
  }
};
