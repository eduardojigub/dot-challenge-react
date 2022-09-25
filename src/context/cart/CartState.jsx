/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { React, useReducer } from 'react';
import { toast } from 'react-toastify';
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import {
  SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, CLEAR_CART,
} from '../Types';

function CartState({ children }) {
  const initalState = {
    showCart: false,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
    toast.success('Produto adicionado com sucesso');
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
    toast.error('Produto removido');
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART, payload: [] });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartState;
