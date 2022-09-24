/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import './Checkout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from '../context/cart/CartContext';
import CartItem from '../components/CartItem';

function Checkout() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const checkoutClick = () => {
    if (name.length > 0
      && email.length > 0
      && address.length > 0
      && city.length > 0
      && state.length > 0) {
      return setIsValid(false);
    }
    return setIsValid(true);
  };

  React.useEffect(() => {
    checkoutClick();
  }, []);

  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <div className="maincontainer">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
                <span className="badge badge-secondary badge-pill">3</span>
              </h4>
              {cartItems.length === 0
                ? (
                  <h4>Cart is Empty</h4>
                ) : (
                  <ul>
                    {cartItems.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </ul>
                )}
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total da sua compra (BRL)</span>
                  <strong>R$12</strong>
                </li>
              </ul>
              <button
                className="btn btn-primary btn-lg btn-block"
                type="button"
                disabled={isValid}
              >
                Finalizar Compra
              </button>
            </div>
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Finalize sua compra</h4>
              <form className="needs-validation" noValidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">Nome Completo</label>
                    <span className="text-muted">(Obrigatório)</span>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      required
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                    <div className="invalid-feedback">
                      Nome é obrigatório
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email">
                    Email
                    {' '}
                    <span className="text-muted">(Obrigatório)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="voce@exemplo.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <div className="invalid-feedback">
                    Por favor, digite um endereço de e-mail válido.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="zip">Cidade</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder=""
                      required
                      onChange={(e) => setCity(e.target.value)}
                      value={city}
                    />
                    <div className="invalid-feedback">Cidade é obrigatório.</div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="zip">Estado</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder=""
                      required
                      onChange={(e) => setState(e.target.value)}
                      value={state}
                    />
                    <div className="invalid-feedback">Estado é obrigatório</div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">CEP</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder=""
                      required
                      onChange={(e) => setZip(e.target.value)}
                      value={zip}
                    />
                    <div className="invalid-feedback">CEP obrigatório</div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
