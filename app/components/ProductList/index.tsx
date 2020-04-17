import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import IProduct from 'types/product';

import messages from './messages';

interface IProductListProps {
  products: (IProduct[] | null);
}

const ProductList: React.FC<IProductListProps> = (props: IProductListProps): null | React.ReactElement => {
  const { products } = props;

  if (!products) {
    return null;
  }

  const productList = products.map((product, index) => {
    return (
      <React.Fragment key={product.productType}>
        <FormattedMessage {...messages[`${product.productType}`]} />
        {index < products.length - 1 ? ', ' : null}
      </React.Fragment>
    );
  });

  return (
    <>
      {productList}
    </>
  );
};

export default ProductList;
