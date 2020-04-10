import React, { ReactElement } from 'react';
import renderer from 'react-test-renderer';

import CustomerName from '..';

describe('<AccountNumber />', () => {
  it('should render correctly', () => {
    const tree: ReactElement = renderer.create(
      <CustomerName firstName="Test" lastName="Test" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
