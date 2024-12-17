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
    },
    alipayReturnUrl: (setting, _, { user }) => {
      const alipayConfig = getConfig('system.alipay', {});
      if (alipayConfig.alipayReturnUrl) {
        return '*******************************';
      }
      if (user) {
        const alipayReturnUrl = setting.find(
          (s) => s.name === 'alipayReturnUrl'
        );
        if (alipayReturnUrl) {
          return alipayReturnUrl.value;
        } else {
          return null;
        }
      } else {
        return null;
      }
    },
    alipayGateway: (setting, _, { user }) => {
      const alipayConfig = getConfig('system.alipay', {});
      if (alipayConfig.alipayGateway) {
        return '*******************************';
      }
      if (user) {
        const alipayGateway = setting.find(
          (s) => s.name === 'alipayGateway'
        );
        if (alipayGateway) {
          return alipayGateway.value;
        } else {
          return null;
        }
      } else {
        return null;
      }
    },
    alipayNotifyUrl: (setting, _, { user }) => {
      const alipayConfig = getConfig('system.alipay', {});
      if (alipayConfig.alipayNotifyUrl) {
        return '*******************************';
      }
      if (user) {
        const alipayNotifyUrl = setting.find(
          (s) => s.name === 'alipayNotifyUrl'
        );
        if (alipayNotifyUrl) {
          return alipayNotifyUrl.value;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  }
};
