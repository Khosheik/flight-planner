// == Import de la lib React
import React from 'react';

// == Imports NPM
import PropTypes from 'prop-types';
import { ImCross } from 'react-icons/im';

// == Imports locaux
import './styles.scss';

const FlightPLans = ({ prop1 }) => (
  <div className="flight-plans">
    <h2 className="flight-plans--title">Drone Flight Plans</h2>
    <ul className="flight-plans--list">
      <li className="flight-plans--list--item">
        <div className="flight-plans--list--item--name">Flight 1</div>
        <div className="flight-plans--list--item--delete"><ImCross /></div>
      </li>
      <li className="flight-plans--list--item">
        <div className="flight-plans--list--item--name">Flight 2</div>
        <div className="flight-plans--list--item--delete"><ImCross /></div>
      </li>
    </ul>
  </div>
);

FlightPLans.propTypes = {
  prop1: PropTypes.string,
};

FlightPLans.defaultProps = {
  prop1: '',
};

export default FlightPLans;
