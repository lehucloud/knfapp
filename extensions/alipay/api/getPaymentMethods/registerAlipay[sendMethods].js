const { getConfig } = require('@evershop/evershop/src/lib/util/getConfig');
const { getSetting } = require('@evershop/evershop/src/modules/setting/services/setting');

// eslint-disable-next-line no-unused-vars
module.exports = async (request, response) => {
  // Check if Alipay is enabled
  const alipayConfig = getConfig('system.alipay', {});
  let alipayStatus;
  if (alipayConfig.status) {
    alipayStatus = alipayConfig.status;
  } else {
    alipayStatus = await getSetting('alipayPaymentStatus', 0);
  }
  if (parseInt(alipayStatus, 10) === 1) {
    return {
      methodCode: 'alipay',
      methodName: await getSetting('alipayDislayName', 'Alipay')
    };
  } else {
    return null;
  }
};
