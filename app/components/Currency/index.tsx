import * as React from 'react';
import { FormattedNumber } from 'react-intl';

interface CurrencyProps {
    type?: string;
    value: (number | string);
}

const Currency: React.FC<CurrencyProps> = (props: CurrencyProps) => {
    const {
        type = 'USD',
        value,
    } = props;

    const isValueNaN = value && isNaN(+value);

    const amount = value === ''
        ? '0'
        : isValueNaN
            ? null
            : value;

    if (amount) {
        return (
            <FormattedNumber
                currency={type}
                style={'currency'}
                value={+amount}
            />
        );
    }

    return (
        <div>
            $0.00
        </div>
    );
};

export default Currency;
