import React, { ReactElement } from 'react';
import renderer from 'react-test-renderer';

import NotFoundPage from '..';

describe('<App />', () => {
  it('should render correctly', () => {
    const tree: ReactElement = renderer.create(
      <NotFoundPage />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
