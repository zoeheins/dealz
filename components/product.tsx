import React from 'react';

import { Product } from '~/utils/types';

interface ProductProps {
  product: Product;
}

const ProductComponent: React.FC<ProductProps> = ({ product }) => {
  const { nickname, price, url } = product;
  return (
    <p>
      <span>
        <a href={url} target='_blank'>{nickname}</a>:{' '}
        {price ? `$${price}` : 'couldnt find price'}{' '}
      </span>
    </p>
  );
};

export default ProductComponent;
