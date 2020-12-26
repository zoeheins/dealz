import Link from 'next/link';

import { baseUrl } from 'utils/config';
import { DBProduct } from 'utils/types';
import ProductTable from 'components/ProductTable';

function HomePage({ error, products }) {
  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h4>Tracked Products:</h4>
          <ProductTable products={products} />
          <button>
            <Link href='/new'>Track a new product</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  let error = null;
  let products: DBProduct[] = [];

  try {
    const url = `${baseUrl}/api/products`;
    const res = await fetch(url);
    const json = await res.json();
    if (json.products) {
      products = json.products;
    }
  } catch (err) {
    console.log('Error from api:', err);
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
