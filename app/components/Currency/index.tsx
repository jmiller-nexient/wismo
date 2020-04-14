import * as React from 'react';
import { FormattedNumber } from 'react-intl';

interface CurrencyProps {
    value: (string | number);
    type: (string | null);
}

const Currency: React.FC<CurrencyProps> = (props: CurrencyProps) => {
    const {
        value,
        type,
    } = props;

    const currency = type ? type : 'USD';

    const isValueNaN = value && isNaN(+value);

    const amount = value === ''
        ? '0'
        : isValueNaN
            ? null
            : value;

    if (amount) {
        return (
            <FormattedNumber
                currency={currency}
                style={'currency'}
                value={+amount}
            />
        );
    }

    return (
        <div>
            Empty Field
        </div>
    );
};

export default Currency;
