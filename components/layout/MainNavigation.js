import React from 'react';
import {Link} from "react-scroll";

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div>
        <li><Link to="home" smooth={true}>
        <img src="https://drive.google.com/uc?id=1_RReY9xp2cq_fpJQHTTafZNow3cNIqWQ" alt="LogoAJ" width="70"/>
          </Link></li>
        </div>
      <nav>
        <ul>
          <li>
           <Link to="home" smooth={true}>Home</Link>
          </li>
          <li>
          <Link to="portfolio" smooth={true}>Portfolio</Link>
          </li>
          <li>
        <Link to="aboutme" smooth={true}>About Me</Link>
          </li>
          <li>
        <Link to="contactme" smooth={true}>Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
