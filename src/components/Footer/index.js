// == Import de la lib React
import React from 'react';

// == Imports NPM
import PropTypes from 'prop-types';

// == Imports locaux
import './styles.scss';

const Footer = ({ prop1 }) => {
  // get the current year, to automatically update
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer--credits">© {year}, Drone fight planner. Tous droits réservés.</div>
    </footer>
  );
};

Footer.propTypes = {
  prop1: PropTypes.string,
};

Footer.defaultProps = {
  prop1: '',
};

export default Footer;
