// == Import de la lib React
import React from 'react';

// == Imports NPM
import PropTypes from 'prop-types';

// == Imports locaux
import './styles.scss';

const FlightPLans = ({ prop1 }) => (
  <div>FlightPLans</div>
);

FlightPLans.propTypes = {
  prop1: PropTypes.string,
};

FlightPLans.defaultProps = {
  prop1: '',
};

export default FlightPLans;
