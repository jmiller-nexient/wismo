import { defineMessages } from 'react-intl';

export const scope = 'wismo.components.product-list';

export default defineMessages({
  IAC: {
    id: `${scope}.IAC`,
    defaultMessage: 'Interuptable Air Conditioning',
  },
  RES_ELECTRIC: {
    id: `${scope}.RES_ELECTRIC`,
    defaultMessage: 'Residential Electric Service',
  },
  RES_GAS: {
    id: `${scope}.RES_GAS`,
    defaultMessage: 'Residential Gas Heating',
  },
});
