import * as React from 'react';

import BaseFormField from 'components/BaseField';
import ProductList from 'components/ProductList';

import IProduct from 'types/product';

import messages from './messages';

interface IProductsListFieldProps {
  products: (IProduct[] | null);
}

const ProductsListField: React.FC<IProductsListFieldProps> = (props: IProductsListFieldProps): React.ReactElement => {
  const { products } = props;

  return (
    <BaseFormField label={messages.productsListFieldLabel}>
      <ProductList products={products}/>
    </BaseFormField>
  );
};

export default ProductsListField;
