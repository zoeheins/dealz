import { baseUrl } from '~/utils/config';
import { Product } from '~/utils/types';

function HomePage({ products }) {
  return (
    <div>
      <h4>Tracked Products:</h4>
      {products.map(product => (
        <p key={product._id}>
          {product.nickname}: { product.price ? (
            `$${product.price}`
          ):(
            'couldnt find price'
          )}
        </p>
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
