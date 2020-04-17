import React from 'react';

import BaseFormField from 'components/BaseField';
import AccountNumber from '../AccountNumber';

import messages from './messages';

interface IAccountNumberFieldProps {
  accountNumber: string;
}

const AccountNumberField: React.FC<IAccountNumberFieldProps> = (props: IAccountNumberFieldProps): React.ReactElement => {
  const { accountNumber } = props;

  return (
    <BaseFormField label={messages.accountNumberFieldLabel}>
      <AccountNumber value={accountNumber}/>
    </BaseFormField>
  );
};

export default AccountNumberField;
