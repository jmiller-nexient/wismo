import React from 'react';
import { IntlProvider } from 'react-intl';
import renderer from 'react-test-renderer';

import { translationMessages } from 'i18n';

import TestRendererJsonType from 'types/TestRendererJsonType';

import NotFoundPage from '..';

describe('<App />', () => {
  it('should render correctly', () => {
    const tree: TestRendererJsonType = renderer.create(
      <IntlProvider locale="en" messages={translationMessages.en}>
        <NotFoundPage />
      </IntlProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
