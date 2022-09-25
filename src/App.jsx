import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <Navbar />
      <Cart />
      <Outlet />
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;
