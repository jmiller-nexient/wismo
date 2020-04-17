import React, { ReactElement } from 'react';
import renderer from 'react-test-renderer';

import Header from '..';

describe('<Header />', () => {
  it('should render correctly', () => {
    const tree: ReactElement = renderer.create(
      <Header />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
