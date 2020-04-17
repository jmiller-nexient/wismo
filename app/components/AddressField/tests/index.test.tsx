import React from 'react';
import renderer from 'react-test-renderer';

import { IntlProvider } from 'react-intl';

import { translationMessages } from '../../../i18n';

import AddressField from 'components/AddressField';

import TestRendererJsonType from 'types/TestRendererJsonType';

const address = {
  line1: '1234 That Street',
  line2: null,
  city: 'Anytown',
  state: 'MI',
  zip: '12345'
};

describe('<AddressField />', () => {
  it('should render correctly when a valid address is passed in', () => {
    const tree: TestRendererJsonType = renderer.create(
      <IntlProvider locale="en" messages={translationMessages.en}>
        <AddressField address={address}/>
      </IntlProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
