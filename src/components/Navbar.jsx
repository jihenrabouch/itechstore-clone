import React from 'react';
import './Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <a href="/"><span className='title'>MAC</span></a>
      <a href="/"><span className='title'>IPAD</span></a>
      <a href="/"><span className='title'>IPHONE</span></a>
      <a href="/"><span className='title'>WATCH</span></a>
      <a href="/"><span className='title'>MUSIC</span></a>
      <a href="/"><span className='title'>ACCESSOIRES</span></a>
      <a href="/"><span className='title'>PLUS</span></a>
    </nav>
  );
}

export default Navbar;
