import * as React from 'react';

import AccountNumberFormField from 'components/AccountNumberField';
import AddressFormField from 'components/AddressField';
import ProductsFormField from 'components/ProductsListField';

import IServiceRequest from 'types/serviceRequest';

import './index.less';

interface IServiceSummaryProps {
  serviceRequest: IServiceRequest;
}

const ServiceSummary: React.FC<IServiceSummaryProps> = (props: IServiceSummaryProps): React.ReactElement => {
  const { accountNumber, address, products } = props.serviceRequest;

  return (
    <div className={'dte-wismo-service-summary'}>
      <AddressFormField address={address}/>
      <AccountNumberFormField accountNumber={accountNumber}/>
      <ProductsFormField products={products}/>
    </div>
  );
};

export default ServiceSummary;
