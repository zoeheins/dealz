import React, { useState } from 'react';

import { Product } from '~/utils/types';

interface ProductProps {
  product: Product;
}

const ProductComponent: React.FC<ProductProps> = ({ product }) => {
  const [price, setPrice] = useState(product.price);
  return (
    <p>
      <>
        {product.nickname}: {price ? `$${price}` : 'couldnt find price'}{' '}
        <button onClick={() => setPrice(1)}>Set price to $1</button>
      </>
    </p>
  );
};

export default ProductComponent;
