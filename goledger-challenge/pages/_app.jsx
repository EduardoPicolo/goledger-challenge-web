import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import toast from '../components/Toast/Toast.component';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/base.scss';

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    toast({ type: 'info', message: 'Welcome!' });
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        closeButton={false}
        pauseOnFocusLoss
        pauseOnHover
        newestOnTop={false}
        autoClose={3500}
      />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
