import React from 'react';

import Product from 'components/Product';

const ProductTable = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Product</td>
          <td>Current Price</td>
          <td>Target Price</td>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <Product product={product} key={product._id} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
