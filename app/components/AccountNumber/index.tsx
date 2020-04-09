import * as React from 'react';

import formatAccountNumber from './formatAccountNumber';
import './index.less';

interface IAccountNumberProps {
  value: string;
}

const AccountNumber: React.FC<IAccountNumberProps> = (props: IAccountNumberProps) => {
  const { value } = props;

  if (value.length !== 12) {
    throw new Error('account numbers must be 12 numeric digits.');
  }

  const formattedAccountNumber = formatAccountNumber(value);

  return (
    <span className="dte-wismo-account-number">
      {formattedAccountNumber}
    </span>
  );
};

export default AccountNumber;
