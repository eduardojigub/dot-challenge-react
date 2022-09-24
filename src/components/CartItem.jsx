/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import './CartItem.css';
import formatCurrency from 'format-currency';
import CartContext from '../context/cart/CartContext';

const API_IMG = 'https://image.tmdb.org/t/p/w500/';

function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);
  const opts = { format: '%s%v', symbol: 'R$' };
  return (
    <li className="CartItem__item">
      <img src={API_IMG + item.poster_path} alt="" />
      <div>
        {item.title}
        {' '}
        {formatCurrency(`${item.price}`, opts)}
      </div>
      <button
        type="button"
        className="CartItem__button"
        onClick={() => removeItem(item.id)}
      >
        Remover
      </button>
    </li>
  );
}

export default CartItem;
