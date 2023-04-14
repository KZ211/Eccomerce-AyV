import React from 'react';

//componentes
import MainNavigation from './MainNavigation';
import Footer from "./Footer";

//estilos
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
