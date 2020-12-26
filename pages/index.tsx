import { baseUrl } from 'utils/config';
import { DBProduct } from 'utils/types';
import ProductTable from 'components/ProductTable';
import { Alert, Container } from 'react-bootstrap';

interface HomePageProps {
  error?: string;
  products: DBProduct[];
}

const HomePage: React.FC<HomePageProps> = ({ error, products }) => {
  return (
    <Container>
      {error ? (
        <Alert variant='danger'>{error}</Alert>
      ) : products.length ? (
        <div>
          <h4 className='display-4'>Tracked Products</h4>
          <ProductTable products={products} />
        </div>
      ) : (
        <Alert variant='primary'>
          You currently aren't tracking any products.
        </Alert>
      )}
    </Container>
  );
};

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
