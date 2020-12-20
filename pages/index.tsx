import { baseUrl } from '~/utils/config';
import { Product } from '~/utils/types';

import ProductComponent from 'components/product';

function HomePage({ error, products }) {
  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h4>Tracked Products:</h4>
          {products.map(product => (
            <ProductComponent product={product} key={product._id} />
          ))}
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  let error = null;
  let products: Product[] = [];

  const url = `${baseUrl}/api/products`;
  const res = await fetch(url);
  const json = await res.json();
  if (json.products) {
    products = json.products;
  } else {
    error = 'Error fetching products';
  }

  return {
    props: {
      error,
      products,
    },
  };
}

export default HomePage;
