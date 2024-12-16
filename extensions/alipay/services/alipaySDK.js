const { AlipaySdk } = require('alipay-sdk');

class Alipay {

    constructor(config) {
        this.sdk = new AlipaySdk(config);
        this.config = config;
    }

    checkNotifySign(params) {
        return this.sdk.checkNotifySign(params);
    }

    pcpay(params) {
        const result =  this.sdk.pageExec("alipay.trade.page.pay", "GET", {
        bizContent: {
            out_trade_no: params.orderId,
            total_amount: params.amount,
            subject: params.description,
            product_code: "FAST_INSTANT_TRADE_PAY",
        },
        returnUrl: this.config.returnUrl,
        notifyUrl: this.config.notifyUrl,
        });
        console.log("alipay pcpay result::::", result);
        return result;
    }

    h5pay(params) {
        const result =  this.sdk.pageExec("alipay.trade.wap.pay", "GET", {
        bizContent: {
            out_trade_no: params.orderId,
            total_amount: params.amount,
            subject: params.description,
            product_code: "QUICK_WAP_WAY",
            seller_id: "2021004162656572",
        },
        returnUrl: this.config.returnUrl,
        notifyUrl: this.config.notifyUrl,
        });
        console.log("alipay h5pay result::::", result);
        return result;
    }
}

module.exports = Alipay;
