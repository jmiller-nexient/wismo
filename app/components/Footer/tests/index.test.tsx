import React from 'react';
import renderer from 'react-test-renderer';

import TestRendererJsonType from 'types/TestRendererJsonType';

import Footer from '..';

describe('<Footer />', () => {
  it('should render correctly', () => {
    const tree: TestRendererJsonType = renderer.create(
      <Footer />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
