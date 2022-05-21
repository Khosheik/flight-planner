// == Import de la lib React
import React, { useLayoutEffect } from 'react';

// == Imports NPM
import PropTypes from 'prop-types';
import Konva from 'konva';

// == Imports locaux
import './styles.scss';
import LausanneMap from 'src/assets/images/lausanne.jpg';

const Map = ({
  handleMouseUp, points, handleClearButtonClick,
}) => {
  // Mount everytime the Points are actualised
  useLayoutEffect(() => {
    // prepare the canvas size
    const canvas = document.getElementById('canvas');
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    // setting up the line drawing with Konva
    // creates the canva
    const stage = new Konva.Stage({
      container: 'canvas',
      width: width,
      height: height,
    });

    // create a layer on the canva
    const layer = new Konva.Layer();
    stage.add(layer);

    // create the line on the layer
    const redLine = new Konva.Line({
      points: points,
      stroke: 'red',
      strokeWidth: 3,
    });
    layer.add(redLine);

    // divide points by pair of coordinates
    const pointsPairs = points.reduce((result, value, index, array) => {
      if (index % 2 === 0) {
        return [...result, array.slice(index, index + 2)];
      }
      return result;
    }, []);

    // create the circle on the layer based on the pair of coordinates
    pointsPairs.forEach((pair) => {
      const redDot = new Konva.Circle({
        x: pair[0],
        y: pair[1],
        radius: 5,
        fill: 'red',
      });
      layer.add(redDot);
    });
  }, [points]);

  return (
    <div className="map">
      <div className="map--top"><input type="button" value="Clear the map" className="map--top--button" onClick={handleClearButtonClick} /></div>
      <div className="map--canvas" id="canvas" style={{ backgroundImage: `url('${LausanneMap}')` }} onMouseUp={handleMouseUp}> Canvas </div>
    </div>
  );
};

Map.propTypes = {
  handleMouseUp: PropTypes.func.isRequired,
  points: PropTypes.array,
  handleClearButtonClick: PropTypes.func.isRequired,
};

Map.defaultProps = {
  points: [],
};

export default Map;
