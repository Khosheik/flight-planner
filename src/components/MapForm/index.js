// == Import de la lib React
import React from 'react';

// == Imports NPM
import PropTypes from 'prop-types';

// == Imports locaux
import './styles.scss';

const MapForm = ({ prop1 }) => (
  <form className="map-form">
    <input type="text" placeholder="Entrez un nom" className="map-form--name" />
    <input type="submit" value="Save the flight plan" className="map-form--save" />
    {/* <input type="button" value="Clear the map" className="map-form--clear" /> */}
  </form>

);

MapForm.propTypes = {
  prop1: PropTypes.string,
};

MapForm.defaultProps = {
  prop1: '',
};

export default MapForm;
