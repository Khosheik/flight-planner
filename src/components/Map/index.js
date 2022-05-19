// == Import de la lib React
import React from 'react';

// == Imports NPM
import PropTypes from 'prop-types';

// == Imports locaux
import './styles.scss';
import LausanneMap from 'src/assets/images/lausanne.jpg';

const Map = ({ prop1 }) => (
  <canvas className="map" style={{ backgroundImage: `url('${LausanneMap}')` }} />
);

Map.propTypes = {
  prop1: PropTypes.string,
};

Map.defaultProps = {
  prop1: '',
};

export default Map;
