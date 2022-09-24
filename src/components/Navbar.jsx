import { React, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartContext from '../context/cart/CartContext';

import './Navbar.css';

function Navbar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch('');
  };

  const { cartItems, showHideCart } = useContext(CartContext);

  return (
    <nav>
      <div className="nav__left">
        <h2>
          <Link to="/">
            <BiCameraMovie />
            {'  '}
            BlockBuster
          </Link>
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 onClick={showHideCart} />
        </button>
      </form>
      <span>
        <AiOutlineShoppingCart />
      </span>
      {cartItems.length > 0 && (
      <div className="item__count">
        <span>{cartItems.length}</span>
      </div>
      )}
    </nav>
  );
}

export default Navbar;
