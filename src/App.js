import React from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
import Header from './components/Header';
import Shop from './components/Shop';

function App() {
  return (
    <>
    <ToastContainer />
      <Header />
      <Shop />
      <Footer />
    </>
  );
}

export default App;
