// == Import de la lib React
import React from 'react';

// == Imports NPM
import PropTypes from 'prop-types';
import { ImCross } from 'react-icons/im';

// == Imports locaux
import './styles.scss';

const FlightCard = ({ name, id, handleDelete }) => (
  <li className="flight-card">
    <div className="flight-card--name">{name}</div>
    <div className="flight-card--delete" onClick={() => handleDelete(id)}><ImCross /></div>
  </li>
);

FlightCard.propTypes = {
  name: PropTypes.string,
};

FlightCard.defaultProps = {
  name: 'Flight with no name',
};

export default FlightCard;
