import React from 'react';

import DateStamp from 'components/DateStamp';
import Hyperlink from 'components/Hyperlink';

import './index.less';

interface IServiceRequestBannerProps {
  serviceDate: string;
}

const ServiceRequestBanner: React.FC<IServiceRequestBannerProps> = (
  props: IServiceRequestBannerProps,
): React.ReactElement => {
  const { serviceDate } = props;

  return (
    <div className="dte-wismo-service-request-banner">
      <h4>
        Start Services <DateStamp date={serviceDate} />
      </h4>
      <Hyperlink href="/orders/999">View Service Notices</Hyperlink>
    </div>
  );
};

export default ServiceRequestBanner;
