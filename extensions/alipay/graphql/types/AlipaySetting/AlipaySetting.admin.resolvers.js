const { getConfig } = require('@evershop/evershop/src/lib/util/getConfig');

module.exports = {
  Setting: {
    alipayPaymentStatus: (setting) => {
      const alipayConfig = getConfig('system.alipay', {});
      if (alipayConfig.status) {
        return alipayConfig.status;
      }
      const alipayPaymentStatus = setting.find(
        (s) => s.name === 'alipayPaymentStatus'
      );
      if (alipayPaymentStatus) {
        return parseInt(alipayPaymentStatus.value, 10);
      } else {
        return 0;
      }
    },
    alipayPaymentIntent: (setting) => {
      const alipayPaymentIntent = setting.find(
        (s) => s.name === 'alipayPaymentIntent'
      );
      if (alipayPaymentIntent) {
        return alipayPaymentIntent.value;
      } else {
        return 'CAPTURE';
      }
    },
    alipayAppId: (setting) => {
      const alipayConfig = getConfig('system.alipay', {});
      if (alipayConfig.alipayAppId) {
        return alipayConfig.alipayAppId;
      }
      const alipayAppId = setting.find((s) => s.name === 'alipayAppId');
      if (alipayAppId) {
        return alipayAppId.value;
      } else {
        return null;
      }
    },
    alipayPrivateKey: (setting, _, { user }) => {
      const alipayConfig = getConfig('system.alipay', {});
      if (alipayConfig.alipayPrivateKey) {
        return '*******************************';
      }
      if (user) {
        const alipayPrivateKey = setting.find(
          (s) => s.name === 'alipayPrivateKey'
        );
        if (alipayPrivateKey) {
          return alipayPrivateKey.value;
        } else {
          return null;
        }
      } else {
        return null;
      }
    },
    alipayPublicKey: (setting, _, { user }) => {
      const alipayConfig = getConfig('system.alipay', {});
      if (alipayConfig.alipayPublicKey) {
        return '*******************************';
      }
      if (user) {
        const alipayPublicKey = setting.find(
          (s) => s.name === 'alipayPublicKey'
        );
        if (alipayPublicKey) {
          return alipayPublicKey.value;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  }
};