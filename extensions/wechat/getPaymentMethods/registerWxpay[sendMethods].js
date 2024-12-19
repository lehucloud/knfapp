const { getConfig } = require('@evershop/evershop/src/lib/util/getConfig');
const { getSetting } = require('@evershop/evershop/src/modules/setting/services/setting');

// eslint-disable-next-line no-unused-vars
module.exports = async (request, response) => {
  // Check if Wxpay is enabled
  const wxpayConfig = getConfig('system.wxpay', {});
  let wxpayStatus;
  if (wxpayConfig.status) {
    wxpayStatus = wxpayConfig.status;
  } else {
    wxpayStatus = await getSetting('wxpayPaymentStatus', 0);
  }
  if (parseInt(wxpayStatus, 10) === 1) {
    return {
      methodCode: 'wxpay',
      methodName: await getSetting('wxpayDislayName', 'Wxpay')
    };
  } else {
    return null;
  }
};
