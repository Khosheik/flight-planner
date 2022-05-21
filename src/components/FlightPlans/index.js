// == Import de la lib React
import React from 'react';

// == Imports NPM
import PropTypes from 'prop-types';
import { ImCross } from 'react-icons/im';

// == Imports locaux
import './styles.scss';
import FlightCard from './FlightCard';

const FlightPlans = ({
  flightPlans, handleDeleteFlightCard, handleOnClick, handleDeleteAll, isEmpty,
}) => (
  <div className="flight-plans">
    <h2 className="flight-plans--title">Drone Flight Plans <span className="flight-plans--title--delete" onClick={handleDeleteAll}><ImCross /></span></h2>
    {isEmpty && (
    <div className="flight-plans--empty">No flight plans, please create one</div>
    )}
    {!isEmpty && (
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
    )}
  </div>
);

FlightPlans.propTypes = {
  flightPlans: PropTypes.array,
  handleDeleteFlightCard: PropTypes.func.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  handleDeleteAll: PropTypes.func.isRequired,
  isEmpty: PropTypes.bool.isRequired,
};

FlightPlans.defaultProps = {
  flightPlans: [],
};

export default FlightPlans;
