// == Import de la lib React
import React from 'react';

// == Imports NPM
import PropTypes from 'prop-types';

// == Imports locaux
import './styles.scss';
import logo from 'src/assets/images/pix4d.png';

const Header = ({ prop1 }) => (
  <header className="header">
    <h1 className="header--title">Drone flight planner <span className="header--title--span">powered by Pix4D<img src={logo} alt="logo" /></span></h1>
  </header>
);

Header.propTypes = {
  prop1: PropTypes.string,
};

Header.defaultProps = {
  prop1: '',
};

export default Header;
