/* eslint-disable react/prop-types */
import './Popup.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Popup({ children, trigger }) {
  const history = useNavigate();

  function handleClick(e) {
    e.preventDefault();

    history('/');
  }

  return (trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        { children }
      </div>
      <button
        type="button"
        className="close-btn btn btn-primary"
        onClick={handleClick}
      >
        Voltar para a loja
      </button>
    </div>
  ) : '';
}

export default Popup;
