import React from 'react';

import './index.less';

interface IAddressProps {
  readonly city: string;
  readonly line1: string;
  readonly line2?: string | null;
  readonly state: string;
  readonly zip: string;
}

const Address: React.FC<IAddressProps> = (props: IAddressProps): React.ReactElement => {
  const { city, line1, line2, state, zip } = props;

  return (
    <address className="dte-wismo-address">
      {line1 + (line2 ? `, ${line2}` : '')}
      <br />
      {`${city}, ${state} ${zip}`}
    </address>
  );
};

export default Address;
