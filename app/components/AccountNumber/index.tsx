import * as React from 'react';

import formatAccountNumber from './formatAccountNumber';

interface IAccountNumberProps {
  value: string;
}

const AccountNumber: React.FC<IAccountNumberProps> = (props: IAccountNumberProps): React.ReactElement => {
  const { value } = props;

  if (value.length !== 12) {
    throw new Error('account numbers must be 12 numeric digits.');
  }

  const formattedAccountNumber = formatAccountNumber(value);

  return <span>{formattedAccountNumber}</span>;
};

export default AccountNumber;
