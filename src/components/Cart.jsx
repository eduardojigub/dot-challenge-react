/* eslint-disable react/jsx-no-useless-fragment */
import React, { useContext } from 'react';
import './Cart.css';
import formatCurrency from 'format-currency';
import CartContext from '../context/cart/CartContext';
import CartItem from './CartItem';

function Cart() {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  const opts = { format: '%s%v', symbol: 'R$' };

  return (
    <>
      {showCart && (
        <div className="cart__wrapper">
          <div style={{ textAlign: 'right' }}>
            <i
              style={{ cursor: 'pointer' }}
              className="fa fa-times-circle"
              aria-hidden="true"
              onClick={showHideCart}
            />
          </div>
          <div className="cart__innerWrapper">
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className="Cart__cartTotal">
            <div>Total da sua compra</div>
            <div />
            <div style={{ marginLeft: 5 }}>
              {formatCurrency(
                cartItems.reduce((amount, item) => item.price + amount, 0),
                opts,
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
