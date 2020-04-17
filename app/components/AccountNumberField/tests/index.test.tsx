import React from 'react';

import { IntlProvider } from 'react-intl';
import renderer from 'react-test-renderer';
import { translationMessages } from '../../../i18n';

import AccountNumberField from 'components/AccountNumberField';

import TestRendererJsonType from 'types/TestRendererJsonType';

const accountNumber = '111233455567';

describe('<AccountNumberField />', () => {
  it('should render correctly when a valid account number is passed in', () => {
    const tree: TestRendererJsonType = renderer.create(
      <IntlProvider locale="en" messages={translationMessages.en}>
        <AccountNumberField accountNumber={accountNumber}/>
      </IntlProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
