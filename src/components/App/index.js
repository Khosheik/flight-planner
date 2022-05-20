// == Import npm
import React, { useState } from 'react';

// == Import
import './styles.scss';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Map from 'src/components/Map';
import FlightPlans from 'src/components/FlightPlans';
import MapForm from 'src/components/MapForm';

// == Composant
const App = () => {
  // == states
  // value (name) in the form to had a flight
  const [inputValue, setInputValue] = useState('');

  // corrdinates for the lines
  const [points, setPoints] = useState([]);

  // local storage of the flight plans
  const [flightPlans, setFlightPlans] = useState([
    { id: 0, name: 'Flight 1', points: [182, 84, 182, 84, 499, 81, 472, 145, 298, 146, 387, 73] },
    { id: 1, name: 'Flight 3', points: [298, 146, 387, 73, 273, 159] },
    { id: 2, name: 'Flight WTF', points: [434, 222, 529, 174, 533, 172] },
  ]);

  // ensure id isnt already taken when creating
  const getHighestId = () => {
    const ids = flightPlans.map((flightplan) => flightplan.id);
    return Math.max(...ids);
  };

  // == Functions tied to the map => gets the points to trace the lines
  const handleMouseDownOnMap = (event) => {
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
  };

  const handleMouseUpOnMap = (event) => {
    const canvas = document.getElementById('canvas');
    const { clientX, clientY } = event;

    // to compensate for the offset
    const x = clientX - canvas.offsetLeft;
    const y = clientY - canvas.offsetTop;
    // we push the new coordonates to trace the line
    setPoints((prevState) => [...prevState, x, y]);
  };

  const handleClearButtonClickOnMap = () => {
    setPoints([]);
  };

  // == Functions tied to the map form => gets the name of the flight plan
  const handleChangeMapForm = (event) => {
    setInputValue(event.target.value);
  };

  const createFlightPlan = (name, coordinates) => {
    const highestId = getHighestId();
    const newId = highestId + 1;
    const newFlightPlan = {
      id: newId,
      name: name,
      points: coordinates,
    };
    setFlightPlans((prevState) => [...prevState, newFlightPlan]);
  };

  const handleMapSubmit = (event) => {
    event.preventDefault();
    createFlightPlan(inputValue, points);
  };

  // == Function tied to the flight plan column
  const handleDeleteFlightCard = (id) => {
    // filter by id to delete the flight plan
    const filteredFlightPlans = flightPlans.filter((plan) => plan.id !== id);
    setFlightPlans(filteredFlightPlans);
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="main--left-column">
          <Map
            handleMouseDown={handleMouseDownOnMap}
            handleMouseUp={handleMouseUpOnMap}
            handleClearButtonClick={handleClearButtonClickOnMap}
            points={points}
          />
          <MapForm
            handleOnSubmit={handleMapSubmit}
            handleChange={handleChangeMapForm}
            inputValue={inputValue}
          />
        </div>
        <FlightPlans flightPlans={flightPlans} handleDeleteFlightCard={handleDeleteFlightCard} />
      </main>
      <Footer />
    </div>
  );
};

// == Export
export default App;
