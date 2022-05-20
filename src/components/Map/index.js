// == Import de la lib React
import React, { useLayoutEffect } from 'react';

// == Imports NPM
import PropTypes from 'prop-types';
import Konva from 'konva';

// == Imports locaux
import './styles.scss';
import LausanneMap from 'src/assets/images/lausanne.jpg';

const Map = ({
  handleMouseDown, handleMouseUp, points, handleClearButtonClick,
}) => {
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

    // divide points by pair of coordinates
    const pointsPairs = points.reduce((result, value, index, array) => {
      if (index % 2 === 0) {
        return [...result, array.slice(index, index + 2)];
      }
      return result;
    }, []);

    pointsPairs.forEach((pair) => {
      console.log('pair', pair);
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
      <div className="map--canvas" id="canvas" style={{ backgroundImage: `url('${LausanneMap}')` }} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}> Canvas </div>
    </div>
  );
};

Map.propTypes = {
  handleMouseDown: PropTypes.func.isRequired,
  handleMouseUp: PropTypes.func.isRequired,
  points: PropTypes.array,
  handleClearButtonClick: PropTypes.func.isRequired,
};

Map.defaultProps = {
  points: [],
};

export default Map;
