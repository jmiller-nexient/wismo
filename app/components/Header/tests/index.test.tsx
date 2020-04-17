import React from 'react';
import renderer from 'react-test-renderer';

import TestRendererJsonType from 'types/TestRendererJsonType';

import Header from '..';

describe('<Header />', () => {
  it('should render correctly', () => {
    const tree: TestRendererJsonType = renderer.create(
      <Header />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
