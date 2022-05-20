// == Import de la lib React
import React from 'react';

// == Imports NPM
import PropTypes from 'prop-types';

// == Imports locaux
import './styles.scss';
// import flights from 'src/data/flights';
import FlightCard from './FlightCard';

const FlightPlans = ({ flightPlans, handleDeleteFlightCard }) => (
  <div className="flight-plans">
    <h2 className="flight-plans--title">Drone Flight Plans</h2>
    <ul className="flight-plans--list">
      {flightPlans.map((flight) => (
        <FlightCard {...flight} key={flight.id} handleDelete={handleDeleteFlightCard} />
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
