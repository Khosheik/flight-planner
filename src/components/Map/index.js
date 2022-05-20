// == Import de la lib React
import React, { useLayoutEffect, useState } from 'react';

// == Imports NPM
import PropTypes from 'prop-types';
import Konva from 'konva';

// == Imports locaux
import './styles.scss';
import LausanneMap from 'src/assets/images/lausanne.jpg';

const Map = ({ prop1 }) => {
  const [points, setPoints] = useState([]);

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

  const handleMouseDown = (event) => {
    const canvas = document.getElementById('canvas');

    // get the coordinate of the mouse within client
    const { clientX, clientY } = event;

    // to compensate for the offset
    const x = clientX - canvas.offsetLeft;
    const y = clientY - canvas.offsetTop;

    // if the state is empty, it's the starting point, no need to use the prevState
    if (points.length < 1) {
      setPoints([x, y]);
    }
    console.log(points);
  };

  const handleMouseUp = (event) => {
    const canvas = document.getElementById('canvas');
    const { clientX, clientY } = event;

    // to compensate for the offset
    const x = clientX - canvas.offsetLeft;
    const y = clientY - canvas.offsetTop;

    // we push the new coordonates to trace the line
    setPoints((prevState) => [...prevState, x, y]);
  };

  const handleButtonClick = () => {
    setPoints([]);
  };

  return (
    <div className="map">
      <div className="map--top"><input type="button" value="Clear the map" className="map--top--button" onClick={handleButtonClick} /></div>
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
