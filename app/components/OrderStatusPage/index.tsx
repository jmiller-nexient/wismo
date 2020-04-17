import React from 'react';

import CustomerName from 'components/CustomerName';
import Footer from 'components/Footer';
import Hyperlink from 'components/Hyperlink';
import PhoneNumber from 'components/PhoneNumber';
import ServiceRequestBanner from 'components/ServiceRequestBanner';
import ServiceRequestViewHeader from 'components/ServiceRequestViewHeader';
import ServiceSummary from 'components/ServiceSummary';
import Stepper from 'components/Stepper';

import { fakeServiceRequest } from 'components/TestPage/constants';

import './index.less';

const OrderStatusPage: React.FC = (): React.ReactElement => (
  <>
    <header className="page-header">&lt;PageHeader /&gt; goes here</header>
    <div className="dte-wismo-order-status-page">
      <ServiceRequestViewHeader serviceRequestNumber="867530986753" />
      <ServiceRequestBanner serviceDate="2020-04-22" />
      <div className="stepper-title">Stop Service Request</div>
      <div className="stepper">
        <Stepper />
      </div>
      <div className="customer-name">
        <CustomerName firstName="Adam" lastName="Naglich" />
      </div>
      <div>
        <span className="phone-number">
          <PhoneNumber value="1234567890" />
        </span>
        <Hyperlink href="/orders/678">Edit Number</Hyperlink>
      </div>
      <div className="service-summary">
        <ServiceSummary serviceRequest={fakeServiceRequest} />
      </div>
    </div>
    <Footer />
  </>
);

export default OrderStatusPage;
