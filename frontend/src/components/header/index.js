
import React from 'react';

import Logo from '../../assets/pizza-slice.svg';
import './style.scss';

function Header() {
  return (
    <header className="header_container">
      <img className="header_logo" src={Logo} alt="Logo Pizz'n'go" /> 
      <h1 className="header_title" >pizz'n'go</h1>
    </header>
  );
}

export default Header;
