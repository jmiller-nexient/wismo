import React from 'react';
import { IntlProvider, MessageDescriptor } from 'react-intl';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { translationMessages } from '../../../i18n';

import BaseField from 'components/BaseField';
import PhoneNumber from 'components/PhoneNumber';

const label: MessageDescriptor = {
  id: 'app.base-form-field-label',
  defaultMessage: 'This is just a filler message',
};

const fillerComponent = <PhoneNumber value={'1234567890'}/>;

describe('<BaseField />', () => {
  it('should render correctly', () => {
    const tree: ReactTestRendererJSON | null = renderer.create(
      <IntlProvider locale="en" messages={translationMessages.en}>
        <BaseField children={fillerComponent} label={label}/>
      </IntlProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
