// == Import de la lib React
import React from 'react';

// == Imports NPM
import PropTypes from 'prop-types';

// == Imports locaux
import './styles.scss';

const Map = ({ prop1 }) => (
  <div>Map</div>
);

Map.propTypes = {
  prop1: PropTypes.string,
};

Map.defaultProps = {
  prop1: '',
};

export default Map;
