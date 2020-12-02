import { baseUrl } from '../config';

function HomePage({ message }) {
  return <div>message from the backend: {message}</div>;
}

export async function getServerSideProps() {
  let message;

  const url = `${baseUrl}/api/hello`;
  console.log('requesting:', url);

  try {
    const res = await fetch(url);
    const json = await res.json();
    message = json.message;
  } catch (err) {
    console.log('error: ', err)
    message = 'error message';
  }

  return {
    props: {
      message,
    },
  };
}

export default HomePage;
