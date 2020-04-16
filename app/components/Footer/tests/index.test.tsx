import React, { ReactElement } from 'react';
import renderer from 'react-test-renderer';

import Footer from '..';

describe('<Footer />', () => {
  it('should render correctly', () => {
    const tree: ReactElement = renderer.create(
      <Footer />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
