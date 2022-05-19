// == Import de la lib React
import React, { useLayoutEffect, useState } from 'react';

// == Imports NPM
import PropTypes from 'prop-types';
import Konva from 'konva';

// == Imports locaux
import './styles.scss';
import LausanneMap from 'src/assets/images/lausanne.jpg';

// function createElement(x1, y1, x2, y2) {
//   const konvaElement = new Konva.Line({
//     points: [x1, y1, x2, y2],
//     stroke: 'blue',
//     strokeWidth: 15,
//   });
//   return {
//     x1, y1, x2, y2, konvaElement,
//   };
// }

const Map = ({ prop1 }) => {
  const [points, setPoints] = useState([]);
  const [drawing, setDrawing] = useState(false);

  useLayoutEffect(() => {
    const canvas = document.getElementById('canvas');
    const width = canvas.offsetWidth;
    const height = 500;

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
      strokeWidth: 2,
    });
    layer.add(redLine);
  }, [points]);

  const handleMouseDown = (event) => {
    console.log('x down', event.clientX);
    console.log('y down', event.clientY);
    setDrawing(true);
    const { clientX, clientY } = event;

    // to compensate for the shift (decalage)
    const x = clientX - 88;
    const y = clientY - 20;

    if (points.length < 1) {
      setPoints((prevState) => [...prevState, x, y]);
    }
    console.log(points);
  };

  const handleMouseMove = (event) => {
    // if we're not drawing, we don't need to track
    if (!drawing) return;

    // const { clientX, clientY } = event;

    // // to compensate for the shift (decalage)
    // const x = clientX - 88;
    // const y = clientY - 25;

    // console.log('x move', clientX);
    // console.log('y move', clientY);

    // setPoints((prevState) => [...prevState, x, y]);
  };

  const handleMouseUp = (event) => {
    const { clientX, clientY } = event;

    // to compensate for the shift (decalage)
    const x = clientX - 88;
    const y = clientY - 25;

    console.log('x move', clientX);
    console.log('y move', clientY);

    setPoints((prevState) => [...prevState, x, y]);
    setDrawing(false);
  };

  return (
    <div className="map" id="canvas" style={{ backgroundImage: `url('${LausanneMap}')` }} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}> Canvas </div>
  );
};

Map.propTypes = {
  prop1: PropTypes.string,
};

Map.defaultProps = {
  prop1: '',
};

export default Map;
