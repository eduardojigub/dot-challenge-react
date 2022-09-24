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
      <ToastContainer />
    </div>
  );
}

export default App;
