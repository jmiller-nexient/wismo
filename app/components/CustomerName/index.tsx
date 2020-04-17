import * as React from 'react';

interface ICustomerNameProps {
  firstName: string;
  lastName: string;
}

const CustomerName: React.FC<ICustomerNameProps> = (props: ICustomerNameProps): React.ReactElement => {
  const { firstName, lastName } = props;

  return <span>{`${firstName} ${lastName}`}</span>;
};

export default CustomerName;
