// == Import de la lib React
import React from 'react';

// == Imports NPM

// == Imports locaux
import './styles.scss';

const Footer = () => {
  // get the current year, to automatically update
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer--credits">© {year}, Drone fight planner. Tous droits réservés.</div>
    </footer>
  );
};

export default Footer;
