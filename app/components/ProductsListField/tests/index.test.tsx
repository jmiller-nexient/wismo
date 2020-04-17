import React from 'react';
import renderer from 'react-test-renderer';

import { IntlProvider } from 'react-intl';

import { translationMessages } from '../../../i18n';

import ProductsListField from 'components/ProductsListField';

import IProduct from 'types/product';
import TestRendererJsonType from 'types/TestRendererJsonType';

const fakeProducts: IProduct[] = [
  {
    productType: 'IAC',
    serviceDate: '04-22-2020'
  },
  {
    productType: 'RES_GAS',
    serviceDate: '04-20-2020'
  }
];

describe('<ProductsListField />', () => {
  it('should render correctly when a valid product list is passed', () => {
    const tree: TestRendererJsonType = renderer.create(
      <IntlProvider locale="en" messages={translationMessages.en}>
        <ProductsListField products={fakeProducts}/>
      </IntlProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
