import React from 'react';
import renderer from 'react-test-renderer';

import TestRendererJsonType from 'types/TestRendererJsonType';

import CustomerName from '..';

describe('<AccountNumber />', () => {
  it('should render correctly', () => {
    const tree: TestRendererJsonType = renderer.create(
      <CustomerName firstName="Test" lastName="Test" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
