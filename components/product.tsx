import React from 'react';

import { Product } from '~/utils/types';

interface ProductProps {
  product: Product;
}

const ProductComponent: React.FC<ProductProps> = ({ product }) => {
  const { nickname, price } = product;
  return (
    <p>
      {nickname}: {price ? `$${price}` : 'couldnt find price'}{' '}
    </p>
  );
};

export default ProductComponent;
