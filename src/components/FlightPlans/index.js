// == Import de la lib React
import React from 'react';

// == Imports NPM
import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi';

// == Imports locaux
import './styles.scss';
import FlightCard from './FlightCard';

const FlightPlans = ({ flightPlans, handleDeleteFlightCard, handleOnClick }) => (
  <div className="flight-plans">
    <h2 className="flight-plans--title">Drone Flight Plans <span><FiTrash2 /></span></h2>
    <ul className="flight-plans--list">
      {flightPlans.map((flight) => (
        <FlightCard
          {...flight}
          key={flight.id}
          handleDelete={handleDeleteFlightCard}
          handleOnClick={handleOnClick}
        />
      ))}
    </ul>
  </div>
);

FlightPlans.propTypes = {
  prop1: PropTypes.string,
};

FlightPlans.defaultProps = {
  prop1: '',
};

export default FlightPlans;
