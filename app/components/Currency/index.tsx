import * as React from 'react';
import { FormattedNumber } from 'react-intl';

interface CurrencyProps {
    type?: string;
    value: (number | string);
}

const Currency: React.FC<CurrencyProps> = (props: CurrencyProps): React.ReactElement => {
    const {
        type = 'USD',
        value,
    } = props;

    const amount = (value && !isNaN(+value)) ? value : '0';

    return (
        <FormattedNumber
            currency={type}
            style={'currency'}
            value={+amount}
        />
    );
};

export default Currency;
