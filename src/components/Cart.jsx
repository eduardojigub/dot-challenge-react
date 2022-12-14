/* eslint-disable react/jsx-no-useless-fragment */
import React, { useContext } from 'react';
import './Cart.css';
import formatCurrency from 'format-currency';
import { Link } from 'react-router-dom';
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
              <h4>Carrinho Vazio</h4>
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
                cartItems
                  .reduce((amount, item) => Number(item.vote_count.toFixed(2) * 0.01) + amount, 0),
                opts,
              )}
            </div>
          </div>
          <Link to="/checkout">
            <button
              type="button"
              className="btn btn-primary mt-2"
              aria-label="Finalizar Compra"
              onClick={showHideCart}
            >
              Ir para o checkout
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;
