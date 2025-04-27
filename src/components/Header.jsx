import React from 'react';
import './Header.css';
import Logo from '../assets/img/logo.jpg'
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function Header() {
  return (
    <>
    <div className='wishlist' ><FontAwesomeIcon icon={faHeart} className="icon" fixedWidth /><span className='wishlist-text'>wishlist (0)</span></div>
    <header className="header">
      <img src={Logo} alt='logo' className='logo' />
      <Navbar/>
      <div className='action-container'>
        <div className="action-item">    
            <FontAwesomeIcon icon={faSearch} fixedWidth />
            Rechercher
        </div>
        <div className='action-item'>
            <FontAwesomeIcon icon={faUser} fixedWidth />
            Connexion
        </div>
        <div className="action-item">
            <FontAwesomeIcon icon={faShoppingBag} fixedWidth />
            Panier
        </div>
      </div>
    </header>
    </>
  );
}

export default Header;
