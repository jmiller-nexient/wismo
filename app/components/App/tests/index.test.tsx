import React, { ReactElement } from 'react';
import renderer from 'react-test-renderer';

import App from '..';

describe('<App />', () => {
  it('should render correctly', () => {
    const tree: ReactElement = renderer.create(
      <App />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
