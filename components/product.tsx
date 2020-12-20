import React from 'react';

import { Product } from '~/utils/types';

interface ProductProps {
  product: Product;
}

const ProductComponent: React.FC<ProductProps> = ({ product }) => {
  return (
    <p>
      <>
        {product.nickname}:{' '}
        {product.price ? `$${product.price}` : 'couldnt find price'}{' '}
        <button>find latest price</button>
      </>
    </p>
  );
};

export default ProductComponent;
