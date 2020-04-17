import React from 'react';

import Hyperlink from 'components/Hyperlink';
import OrderNumber from 'components/OrderNumber';

import './index.less';

interface IServiceRequestViewHeaderProps {
  serviceRequestNumber: string;
}

const ServiceRequestViewHeader: React.FC<IServiceRequestViewHeaderProps> = (
  props: IServiceRequestViewHeaderProps,
): React.ReactElement => {
  const { serviceRequestNumber } = props;

  return (
    <div className="dte-wismo-service-request-view-header">
      <div className="column">
        <Hyperlink href="/orders/123">&lt; Back to All Service Requests</Hyperlink>
      </div>
      <div className="column service-request-number">
        <span className="label">Service Request No.</span>
        <OrderNumber value={serviceRequestNumber} />
      </div>
    </div>
  );
};

export default ServiceRequestViewHeader;
