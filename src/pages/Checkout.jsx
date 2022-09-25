/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import './Checkout.css';
import formatCurrency from 'format-currency';
import InputMask from 'react-input-mask';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from '../context/cart/CartContext';
import CartItem from '../components/CartItem';
import Popup from '../components/Popup';

function Checkout() {
  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const opts = { format: '%s%v', symbol: 'R$' };
  const [buttonPopup, setButtonPopup] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const checkoutClick = () => {
    if (name.length > 1) {
      return setIsValid(false);
    }
    return setIsValid(true);
  };

  React.useEffect(() => {
    checkoutClick();
  }, [name.length]);

  const validateEmail = () => String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );

  (function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach((form) => {
        form.addEventListener('submit', (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add('was-validated');
        }, false);
      });
  }());

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonPopup(true);
  };

  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <div className="maincontainer">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3 mt-5">
                <span className="text-muted">Carrinho de Compras</span>
              </h4>
              {cartItems.length === 0
                ? (
                  <h4>Seu carrinho está vazio!</h4>
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
                  <strong>
                    {formatCurrency(
                      cartItems
                        .reduce((amount, item) => Number(item
                          .vote_count.toFixed(2) * 0.01) + amount, 0),
                      opts,
                    )}
                  </strong>
                </li>
              </ul>
            </div>
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3 mt-5">Revise seu pedido e finalize sua compra</h4>
              <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationCustom01" className="form-label">Nome Completo</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom01"
                      placeholder="Digite seu nome"
                      required
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                    <div className="invalid-feedback">
                      Nome é obrigatório
                    </div>
                  </div>
                </div>
                <div className="col-md-5 mb-3">
                  <label htmlFor="zip">CPF</label>
                  <InputMask
                    type="text"
                    className="form-control"
                    id="zip"
                    mask="999.999.999-99"
                    placeholder="000.123.456-78"
                    required
                    onChange={(e) => setCPF(e.target.value)}
                    value={cpf}
                  />
                  <div className="invalid-feedback">Campo CPF é obrigatório.</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="zip">Celular</label>
                  <InputMask
                    type="text"
                    className="form-control"
                    id="zip"
                    mask="(99) 99999-9999"
                    placeholder="(XX) 99999-0000"
                    required
                    onChange={(e) => setCelular(e.target.value)}
                    value={celular}
                  />
                  <div className="invalid-feedback">Campo é obrigatório</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="voce@exemplo.com"
                    required
                    onChange={(e) => setEmail(validateEmail(e.target.value))}
                    value={email}
                  />
                  <div className="invalid-feedback">
                    O campo de e-mail é obrigatório
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Digite seu endereço completo"
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                  />
                  <div className="invalid-feedback">
                    O campo de endereço é obrigatório
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="zip">Cidade</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder="Sua cidade"
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
                      placeholder="Estado"
                      required
                      onChange={(e) => setState(e.target.value)}
                      value={state}
                    />
                    <div className="invalid-feedback">Estado é obrigatório</div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">CEP</label>
                    <InputMask
                      type="text"
                      className="form-control"
                      id="zip"
                      mask="99999-999"
                      placeholder="60160-000"
                      required
                      onChange={(e) => setZip(e.target.value)}
                      value={zip}
                    />
                    <div className="invalid-feedback">CEP obrigatório</div>
                  </div>
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                  disabled={isValid}
                >
                  Finalizar Compra
                </button>
              </form>
            </div>
          </div>
        </div>
        <Popup trigger={buttonPopup}>
          <h4>
            Parabéns
            {' '}
            {name}
          </h4>
          <h5>Sua compra foi finalizada com sucesso!</h5>
        </Popup>
      </div>
    </div>
  );
}

export default Checkout;
