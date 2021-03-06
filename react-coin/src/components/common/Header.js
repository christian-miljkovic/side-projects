import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Header.css';

const containerStyle = {
  fontSize: '40px'
}

const Header = () => {

  return (
    <div style={containerStyle} className="Header">
      <Link to="/">
        <img src={logo} alt="logo" className="Header-logo" />
      </Link>
      Cryptocurrency Prices
    </div>
  );
}

export default Header;
