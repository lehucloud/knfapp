const { addProcessor } = require('@evershop/evershop/src/lib/util/registry');
const { getSetting } = require('@evershop/evershop/src/modules/setting/services/setting');


module.exports = () => {
  addProcessor('cartFields', (fields) => {
    fields.push({
      key: 'payment_method',
      resolvers: [
        async function resolver(paymentMethod) {
          // Do nothing if the payment method is not paypal
          if (paymentMethod !== 'alipay') {
            return paymentMethod;
          } else {
            // Validate the payment method
            const paypalStatus = await getSetting('alipayPaymentStatus');
            if (parseInt(paypalStatus, 10) !== 1) {
              return null;
            } else {
              this.setError('payment_method', undefined);
              return paymentMethod;
            }
          }
        }
      ]
    });
    return fields;
  });
};
