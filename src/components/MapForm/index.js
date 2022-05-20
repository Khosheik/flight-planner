// == Import de la lib React
import React from 'react';

// == Imports NPM
import PropTypes from 'prop-types';

// == Imports locaux
import './styles.scss';

const MapForm = ({ handleOnSubmit, handleChange, inputValue }) => (
  <form className="map-form">
    <input type="text" placeholder="Entrez un nom" className="map-form--name" value={inputValue} onChange={handleChange} />
    <input type="button" value="Save the flight plan" className="map-form--save" onClick={handleOnSubmit} />
  </form>

);

MapForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
};

MapForm.defaultProps = {
  inputValue: '',
};

export default MapForm;
