const { getConfig } = require('@evershop/evershop/src/lib/util/getConfig');

module.exports = {
  Setting: {
    alipayDislayName: (setting) => {
      const alipayDislayName = setting.find(
        (s) => s.name === 'alipayDislayName'
      );
      if (alipayDislayName) {
        return alipayDislayName.value;
      } else {
        return 'Alipay';
      }
    },
    alipayGateway: (setting) => {
      const alipayConfig = getConfig('system.alipay', {});
      if (alipayConfig.alipayGateway) {
        return alipayConfig.alipayGateway;
      }
      const alipayGateway = setting.find(
        (s) => s.name === 'alipayGateway'
      );
      if (alipayGateway) {
        return alipayGateway.value;
      } else {
        return 'https://api-m.sandbox.alipay.com';
      }
    }
  }
};
