
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">MARVEL APP</Link>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Accueil
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/favorites" className="nav-link">
            Favoris
          </Link>
        </li>  
      </ul>
    </nav>
  );
};

export default Navbar;