import React from 'react';
//used to link without having to reload the page
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="NotFound">
      <h1 className="NotFound-title">Oops! Page not found!</h1>
      <Link to="/" className="NotFound-link">Go to homepage</Link>
    </div>
  )
}

export default NotFound;
