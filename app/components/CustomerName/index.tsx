import * as React from 'react';

import './index.less';

interface ICustomerNameProps {
  firstName: string;
  lastName: string;
}

const CustomerName: React.FC<ICustomerNameProps> = (props: ICustomerNameProps) => {
  const { firstName, lastName } = props;

  return (
    <span className="dte-wismo-customer-name">
      {`${firstName} ${lastName}`}
    </span>
  );
};

export default CustomerName;
