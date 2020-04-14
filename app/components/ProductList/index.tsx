import * as React from 'react';

interface IProductListProps {
  products: string[] | null;
}

const ProductList: React.FC<IProductListProps> = (props: IProductListProps) => {
  const { products } = props;

  if (!products) {
    return null;
  }

  const productList = products.map((product, index) => {
    return <span key={`product-${index}`}>{ (index ? ', ' : '') + product}</span>;
  });

  return (
    <span>
      {productList}
    </span>
  );
};

export default ProductList;
