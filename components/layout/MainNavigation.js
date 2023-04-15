import React from 'react';
import {Link} from "react-router-dom";

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div>
        <li><Link to="home" smooth={true}>
        <img src="/" alt="LogoAJ" width="70"/>
          </Link></li>
        </div>
      <nav>
        <ul>
          <li>
           <Link to="/home">Home</Link>
          </li>
          <li>
          <Link to="/carrito">Carrito</Link>
          </li>
          <li>
        <Link to="/soporte">Soporte</Link>
          </li>
          <li>
        <Link to="/vender">Vender</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
