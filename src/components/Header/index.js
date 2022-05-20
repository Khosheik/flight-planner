// == Import de la lib React
import React from 'react';

// == Imports NPM

// == Imports locaux
import './styles.scss';
import logo from 'src/assets/images/pix4d.png';

const Header = () => (
  <header className="header">
    <h1 className="header--title">Drone flight planner <span className="header--title--span">powered by Pix4D<img src={logo} alt="logo" /></span></h1>
  </header>
);

export default Header;
