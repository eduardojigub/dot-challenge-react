/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import './CartItem.css';
import { FaTrash } from 'react-icons/fa';
import formatCurrency from 'format-currency';
import CartContext from '../context/cart/CartContext';

const API_IMG = 'https://image.tmdb.org/t/p/w500/';

function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);
  const opts = { format: '%s%v', symbol: 'R$' };
  return (
    <li className="CartItem__item">
      <img src={API_IMG + item.poster_path} alt="" />
      <div className="CartItem__nameandprice">
        {item.title}
        {' '}
        {formatCurrency(`${item.vote_count.toFixed(2) * 0.01}`, opts)}
      </div>
      <button
        type="button"
        className="CartItem__button"
        onClick={() => removeItem(item.id)}
      >
        <FaTrash />
      </button>
    </li>
  );
}

export default CartItem;
