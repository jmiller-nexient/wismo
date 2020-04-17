import * as React from 'react';

interface IOrderNumberProps {
  value: string;
}

const OrderNumber: React.FC<IOrderNumberProps> = (props: IOrderNumberProps): React.ReactElement => {
  const { value } = props;

  const formatOrderNumber = (input: string): string => {
    return `${input.substr(0,4)} ${input.substr(4,4)} ${input.substr(8,3)} ${input.substr(11,1)}`;
  };

  const regex = new RegExp('^[0-9]{12}$', 'g');

  if (!regex.test(value)) {
    throw new Error('order numbers must be exactly 12 digits.');
  }

  return (
    <span>
      {formatOrderNumber(value)}
    </span>
  );
};

export default OrderNumber;
