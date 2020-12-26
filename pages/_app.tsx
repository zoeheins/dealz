import { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

import TopBar from 'components/TopBar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <TopBar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
