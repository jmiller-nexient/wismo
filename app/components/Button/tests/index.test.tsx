import React from 'react';
import renderer from 'react-test-renderer';

import TestRendererJsonType from 'types/TestRendererJsonType';

import Button from '..';

describe('<Button />', () => {
  it('should render correctly when it is primary', () => {
    const tree: TestRendererJsonType = renderer.create(
      <Button type="primary" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when it is primary and disabled', () => {
    const tree: TestRendererJsonType = renderer.create(
      <Button disabled type="primary" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when it is secondary', () => {
    const tree: TestRendererJsonType = renderer.create(
      <Button type="secondary" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when it is secondary and disabled', () => {
    const tree: TestRendererJsonType = renderer.create(
      <Button disabled type="secondary" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
