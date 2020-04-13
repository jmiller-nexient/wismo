import * as React from 'react';

import formatPhoneNumber from './formatPhoneNumber';

interface IPhoneNumberProps {
  value: string;
}

const PhoneNumber: React.FC<IPhoneNumberProps> = (props: IPhoneNumberProps): React.ReactElement => {
  const { value } = props;

  if (value.length !== 10 && value.length !== 7) {
    throw new Error('phone numbers must be 10 or 7 numeric digits.');
  }

  const formattedPhoneNumber = formatPhoneNumber(value);

  return <span>{formattedPhoneNumber}</span>;
};

export default PhoneNumber;
