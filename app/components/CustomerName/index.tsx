import * as React from 'react';

import './index.less';

interface ICustomerNameProps {
  value: string;
}

const CustomerName: React.FC<ICustomerNameProps> = (props: ICustomerNameProps) => {
  const { value } = props;

  return (
    <span className="dte-wismo-customer-name">
      {value}
    </span>
  );
};

export default CustomerName;
