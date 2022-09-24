import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <Navbar />
      <Cart />
      <Outlet />
    </div>
  );
}

export default App;
