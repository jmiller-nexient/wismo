import React, { ReactElement } from 'react';
import { IntlProvider } from 'react-intl';
import renderer from 'react-test-renderer';

import { translationMessages } from 'i18n';

import NotFoundPage from '..';

describe('<App />', () => {
  it('should render correctly', () => {
    const tree: ReactElement = renderer.create(
      <IntlProvider locale="en" messages={translationMessages.en}>
        <NotFoundPage />
      </IntlProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
