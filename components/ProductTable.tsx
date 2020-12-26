import React from 'react';
import { Table } from 'react-bootstrap';

import Product from 'components/Product';
import { DBProduct } from 'utils/types';

interface ProductTableProps {
  products: DBProduct[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  return (
    <Table bordered hover>
      <thead className="table-dark">
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
    </Table>
  );
};

export default ProductTable;
