import React from 'react';

import { DBProduct } from 'utils/types';

interface ProductProps {
  product: DBProduct;
}

const ProductComponent: React.FC<ProductProps> = ({ product }) => {
  const { nickname, price, url, targetPrice } = product;
  return (
    <tr>
      <td>
        <a href={url} target='_blank'>
          {nickname}
        </a>
        :{' '}
      </td>
      <td>{price ? `$${price}` : 'couldnt find price'} </td>
      <td>${targetPrice}</td>
    </tr>
  );
};

export default ProductComponent;
