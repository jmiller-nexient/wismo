import React, { ReactElement } from 'react';
import renderer from 'react-test-renderer';

import ProductList from '..';

const madeUpList = [
  'Rubber Ducky',
  'Sgt. Peppers Lonely Hearts Club Band',
  'Bag of Bricks'
];

describe('<ProductList />', () => {
  it('should render correctly', () => {
    const tree: ReactElement = renderer.create(
      <ProductList products={madeUpList} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with an empty product list', () => {
    const tree: ReactElement = renderer.create(
      <ProductList products={null} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
