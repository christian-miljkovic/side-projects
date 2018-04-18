import React from 'react';
import logo from './logo.png';
import './Header.css';

const containerStyle = {
  fontSize: '40px'
}

const Header = () => {

  return (
    <div style={containerStyle} className="Header">Cryptocurrency Prices</div>
  );
}

export default Header;
