import React, { ReactElement } from 'react';
import renderer from 'react-test-renderer';

import Button from '..';

describe('<Button />', () => {
  it('should render correctly when it is primary', () => {
    const tree: ReactElement = renderer.create(
      <Button type="primary" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when it is primary and disabled', () => {
    const tree: ReactElement = renderer.create(
      <Button disabled type="primary" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when it is secondary', () => {
    const tree: ReactElement = renderer.create(
      <Button type="secondary" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when it is secondary and disabled', () => {
    const tree: ReactElement = renderer.create(
      <Button disabled type="secondary" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
