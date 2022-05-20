// == Import de la lib React
import React from 'react';

// == Imports NPM
import PropTypes from 'prop-types';
import { ImCross } from 'react-icons/im';

// == Imports locaux
import './styles.scss';

const FlightCard = ({
  name, id, handleDelete, handleOnClick,
}) => (
  <li className="flight-card" onClick={() => handleOnClick(id)}>
    <div className="flight-card--name">{name === '' ? 'No name' : name }</div>
    <div className="flight-card--delete" onClick={() => handleDelete(id)}><ImCross /></div>
  </li>
);

FlightCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

FlightCard.defaultProps = {
  name: 'Flight with no name',
};

export default FlightCard;
