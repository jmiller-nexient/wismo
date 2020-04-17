import React from 'react';

import Address from 'components/Address';
import BaseFormField from 'components/BaseField';

import IAddress from 'types/address';

import messages from './messages';

interface IAddressFieldProps {
  address: IAddress;
}

const AddressField: React.FC<IAddressFieldProps> = (props: IAddressFieldProps): React.ReactElement => {
  const { address } = props;

  return (
    <BaseFormField label={messages.addressFieldLabel}>
      <Address {...address}/>
    </BaseFormField>
  );
};

export default AddressField;
