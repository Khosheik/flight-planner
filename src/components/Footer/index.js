// == Import de la lib React
import React from 'react';

// == Imports NPM
import PropTypes from 'prop-types';

// == Imports locaux
import './styles.scss';

const Footer = ({ prop1 }) => (
  <footer>Footer</footer>
);

Footer.propTypes = {
  prop1: PropTypes.string,
};

Footer.defaultProps = {
  prop1: '',
};

export default Footer;
