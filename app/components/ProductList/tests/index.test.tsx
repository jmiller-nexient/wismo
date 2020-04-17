import React from 'react';
import renderer from 'react-test-renderer';

import ProductList from 'components/ProductList';

import IProduct from 'types/product';
import TestRendererJsonType from 'types/TestRendererJsonType';

const emptyList: IProduct[] =[];
const oneItemList: IProduct[] = [
  {
    productType: 'IAC',
    serviceDate: '2020-03-21'
  }
];
const threeItemList: IProduct[] = [
  {
    productType: 'IAC',
    serviceDate: '2020-03-21'
  },
  {
    productType: 'RES_GAS',
    serviceDate: '2020-03-15'
  },
  {
    productType: 'RES_ELECTRIC',
    serviceDate: '04-22-2020'
  }
];

describe('<ProductList />', () => {
  it('should render correctly when a product list with multiple items is passed', () => {
    const tree: TestRendererJsonType = renderer.create(
      <ProductList products={threeItemList} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when a product list with a single item is passed', () => {
    const tree: TestRendererJsonType = renderer.create(
      <ProductList products={oneItemList} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when product list is empty', () => {
    const tree: TestRendererJsonType = renderer.create(
      <ProductList products={emptyList}/>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
