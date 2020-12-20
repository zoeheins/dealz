import { baseUrl } from '~/utils/config';
import { Product } from '~/utils/types';

import ProductComponent from 'components/product';

function HomePage({ products }) {
  return (
    <div>
      <h4>Tracked Products:</h4>
      {products.map(product => (
        <ProductComponent product={product} key={product._id} />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  let products: Product[];

  const url = `${baseUrl}/api/products`;
  try {
    const res = await fetch(url);
    const json = await res.json();
    products = json.products;
  } catch (err) {
    console.log('error: ', err);
  }

  return {
    props: {
      products,
    },
  };
}

export default HomePage;
