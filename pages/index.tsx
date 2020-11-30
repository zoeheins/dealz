import { baseUrl } from '../config';

function HomePage({ message }) {
  return <div>message from the backend: {message}</div>;
}

export async function getStaticProps() {
  let message;

  try {
    const res = await fetch(`${baseUrl}/api/hello`);
    const json = await res.json();
    message = json.message;
  } catch (err) {
    message = 'error message';
  }

  return {
    props: {
      message,
    },
  };
}

export default HomePage;
