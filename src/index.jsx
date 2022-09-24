import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Search from './pages/Search';
import CartState from './context/cart/CartState';
import Checkout from './pages/Checkout';

import 'react-toastify/dist/ReactToastify.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartState>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </CartState>
    </BrowserRouter>
  </React.StrictMode>,
);
