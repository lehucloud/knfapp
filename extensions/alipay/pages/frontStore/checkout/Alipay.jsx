import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useCheckout } from '@components/common/context/checkout';
import AlipayLogo from './AlipayLogo';
import { _ } from '@evershop/evershop/src/lib/locale/translate';

export function Alipay({
  alipayCreatePaymentIntentAPI,
  orderId,
  orderPlaced
}) {
  const [error, setError] = useState('');
  // const [accessTokenGenerated, setAccessTokenGenerated] = useState(false);

  // React.useEffect(() => {
  //   const getAccessToken = async () => {
  //     let response = await fetch(alipayCreatePaymentIntentAPI, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         order_id: orderId
  //       })
  //     });
  //     response = await response.json();
  //     if (!response.error) {
  //       setAccessTokenGenerated(true);
  //     } else {
  //       setError(response.error.message);
  //     }
  //   };

  //   if (orderId) {
  //     // Call the API to get the access token
  //     getAccessToken();
  //   }
  // }, [orderId]);

//获取当前支付环境  是电脑端支付 还是手机端支付，或者是否在微信中支付
const getPayEnvironment = () => {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("micromessenger")) {
      return "wechat";
  } else if (ua.includes("mobile")) {
      return "mobile";
  } else {
      return "pc";
  }
};

  React.useEffect(() => {

    const alipayCreatePayment = async () => {
      const response = await fetch(alipayCreatePaymentIntentAPI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order_id: orderId,
          payEnvironment: getPayEnvironment()
        })
      });
      
      const data = await response.json();
      if (!response.error) {
        const requestUrl =data.data;
        // Redirect to Alipay for payment approval
        window.location.href = requestUrl;
      } else {
        setError(response.error.message);
      }
    };

    if (orderPlaced&&orderId) {
      // Call the API to create the order
      alipayCreatePayment();
    }
  }, [orderPlaced,orderId]);

  return (
    <div>
      {error && <div className="text-critical mb-4">{error}</div>}
      <div className="p-8 text-center border rounded mt-4 border-divider">
        {_('You will be redirected to Alipay')}
      </div>
    </div>
  );
}

Alipay.propTypes = {
  alipayCreatePaymentIntentAPI: PropTypes.func.isRequired,
  orderId: PropTypes.string.isRequired,
  orderPlaced: PropTypes.bool.isRequired
};

export default function AlipayMethod({ alipayCreatePaymentIntentAPI }) {

  const checkout = useCheckout();
  
  const { paymentMethods, setPaymentMethods, orderPlaced, orderId } = checkout;
  // Get the selected payment method
  const selectedPaymentMethod = paymentMethods
    ? paymentMethods.find((paymentMethod) => paymentMethod.selected)
    : undefined;

  return (
    <div>
      <div className="flex justify-start items-center gap-4">
        {(!selectedPaymentMethod ||
          selectedPaymentMethod.code !== 'alipay') && (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setPaymentMethods((previous) =>
                previous.map((paymentMethod) => {
                  if (paymentMethod.code === 'alipay') {
                    return {
                      ...paymentMethod,
                      selected: true
                    };
                  } else {
                    return {
                      ...paymentMethod,
                      selected: false
                    };
                  }
                })
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </a>
        )}
        {selectedPaymentMethod && selectedPaymentMethod.code === 'alipay' && (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2c6ecb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
        )}
        <div>
          <AlipayLogo width={70} />
        </div>
      </div>
      <div>
        {selectedPaymentMethod && selectedPaymentMethod.code === 'alipay' && (
          <div>
            <Alipay
              alipayCreatePaymentIntentAPI={alipayCreatePaymentIntentAPI}
              orderPlaced={orderPlaced}
              orderId={orderId}
            />
          </div>
        )}
      </div>
    </div>
  );
}

AlipayMethod.propTypes = {
  alipayCreatePaymentIntentAPI: PropTypes.func.isRequired
};

export const layout = {
  areaId: 'checkoutPaymentMethodalipay',
  sortOrder: 500
};

export const query = `
  query Query {
    alipayCreatePaymentIntentAPI: url(routeId: "alipayCreatePaymentIntent")
  }
`;
