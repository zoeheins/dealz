import { baseUrl } from '~/utils/config';
import { Product } from '~/utils/types';

import ProductComponent from 'components/product';

function HomePage({ error, products }) {
  return (
    <div>
      <h4>Tracked Products:</h4>
      {error ? (
        <p>{error}</p>
      ) : (
        products.map(product => (
          <ProductComponent product={product} key={product._id} />
        ))
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
  if (!json.products) {
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
