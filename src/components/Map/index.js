// == Import de la lib React
import React, { useLayoutEffect, useState } from 'react';

// == Imports NPM
import PropTypes from 'prop-types';
import Konva from 'konva';

// == Imports locaux
import './styles.scss';
import LausanneMap from 'src/assets/images/lausanne.jpg';

const Map = ({ handleMouseDown, handleMouseUp, points, handleClearButtonClick }) => {
  useLayoutEffect(() => {
    const canvas = document.getElementById('canvas');
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    // setting up the line drawing with Konva
    const stage = new Konva.Stage({
      container: 'canvas',
      width: width,
      height: height,
    });

    const layer = new Konva.Layer();
    stage.add(layer);

    const redLine = new Konva.Line({
      points: points,
      stroke: 'red',
      strokeWidth: 3,
    });
    layer.add(redLine);
  }, [points]);

  return (
    <div className="map">
      <div className="map--top"><input type="button" value="Clear the map" className="map--top--button" onClick={handleClearButtonClick} /></div>
      <div className="map--canvas" id="canvas" style={{ backgroundImage: `url('${LausanneMap}')` }} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}> Canvas </div>
    </div>
  );
};

Map.propTypes = {
  prop1: PropTypes.string,
};

Map.defaultProps = {
  prop1: '',
};

export default Map;
