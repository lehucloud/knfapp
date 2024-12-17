import PropTypes from 'prop-types';
import React from 'react';
import { Field } from '@components/common/form/Field';
import { Toggle } from '@components/common/form/fields/Toggle';
import { Card } from '@components/admin/cms/Card';

export default function AlipayPayment({
  setting: {
    alipayPaymentStatus,
    alipayDislayName,
    alipayAppId,
    alipayPrivateKey,
    alipayPublicKey,
    alipayGateway,
    alipayNotifyUrl,
    alipayReturnUrl,
  }
}) {
  return (
    <Card title="Alipay Payment">
      <Card.Session>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 items-center flex">
            <h4>Enable?</h4>
          </div>
          <div className="col-span-2">
            <Toggle name="alipayPaymentStatus" value={alipayPaymentStatus} />
          </div>
        </div>
      </Card.Session>
      <Card.Session>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 items-center flex">
            <h4>Dislay Name</h4>
          </div>
          <div className="col-span-2">
            <Field
              type="text"
              name="alipayDislayName"
              placeholder="Dislay Name"
              value={alipayDislayName}
            />
          </div>
        </div>
      </Card.Session>
      <Card.Session>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 items-center flex">
            <h4>AppID</h4>
          </div>
          <div className="col-span-2">
            <Field
              type="text"
              name="alipayAppId"
              placeholder="Client ID"
              value={alipayAppId}
            />
          </div>
        </div>
      </Card.Session>
      <Card.Session>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 items-center flex">
            <h4>Private Key</h4>
          </div>
          <div className="col-span-2">
            <Field
              type="textarea"
              name="alipayPrivateKey"
              placeholder="Private Key"
              value={alipayPrivateKey}
            />
          </div>
        </div>
      </Card.Session>
      <Card.Session>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 items-center flex">
            <h4>Public Key</h4>
          </div>
          <div className="col-span-2">
            <Field
              type="textarea"
              name="alipayPublicKey"
              placeholder="Public Key"
              value={alipayPublicKey}
            />
          </div>
        </div>
      </Card.Session>
      <Card.Session>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 items-center flex">
            <h4>Gateway</h4>
          </div>
          <div className="col-span-2">
            <Field
              type="text"
              name="alipayGateway"
              placeholder="Public Key"
              value={alipayGateway}
            />
          </div>
        </div>
      </Card.Session>
      <Card.Session>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 items-center flex">
            <h4>Notify Url</h4>
          </div>
          <div className="col-span-2">
            <Field
              type="text"
              name="alipayNotifyUrl"
              placeholder="Notify Url"
              value={alipayNotifyUrl}
            />
          </div>
        </div>
      </Card.Session>
      <Card.Session>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 items-center flex">
            <h4>Return Url</h4>
          </div>
          <div className="col-span-2">
            <Field
              type="text"
              name="alipayReturnUrl"
              placeholder="Return Url"
              value={alipayReturnUrl}
            />
          </div>
        </div>
      </Card.Session>
    </Card>
  );
}

AlipayPayment.propTypes = {
  setting: PropTypes.shape({
    alipayPaymentStatus: PropTypes.number,
    alipayDislayName: PropTypes.string,
    alipayAppId: PropTypes.string,
    alipayPrivateKey:PropTypes.string,
    alipayPublicKey:PropTypes.string,
    alipayGateway:PropTypes.string,
    alipayNotifyUrl:PropTypes.string,
    alipayReturnUrl:PropTypes.string,
  })
};

AlipayPayment.defaultProps = {
  setting: {
    alipayPaymentStatus: 0,
    alipayDislayName:'',
    alipayAppId:'',
    alipayPrivateKey:'',
    alipayPublicKey:'',
    alipayGateway:'',
    alipayNotifyUrl:'',
    alipayReturnUrl:'',
  }
};

export const layout = {
  areaId: 'paymentSetting',
  sortOrder: 20
};

export const query = `
  query Query {
    setting {
      alipayPaymentStatus
      alipayDislayName
      alipayAppId
      alipayPrivateKey
      alipayPublicKey
      alipayGateway
      alipayNotifyUrl
      alipayReturnUrl
    }
  }
`;
