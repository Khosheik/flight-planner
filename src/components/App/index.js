// == Import npm
import React, { useState, useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

// == Import locaux
import './styles.scss';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Map from 'src/components/Map';
import FlightPlans from 'src/components/FlightPlans';
import MapForm from 'src/components/MapForm';
import data from 'src/data/flights';

// == Composant
const App = () => {
  // == STATES
  // value (name) in the form to had a flight
  const [inputValue, setInputValue] = useState('');

  // corrdinates for the lines
  const [points, setPoints] = useState([]);

  // local storage of the flight plans
  const [flightPlans, setFlightPlans] = useState([]);

  const [isEmpty, setIsEmpty] = useState(false);

  // == Component did mount
  useEffect(() => {
    // here would be the call to the back to get the data
    setFlightPlans(data);
  }, []);

  // == FUNCTIONS
  // ensure id isnt already taken when creating
  const getHighestId = () => {
    if (!isEmpty) {
      const ids = flightPlans.map((flightplan) => flightplan.id);
      return Math.max(...ids);
    }
    return 0;
  };

  // == Functions tied to the map => gets the points to trace the lines
  // handles the release of the mouse to give the coordinate
  const handleMouseUpOnMap = (event) => {
    const canvas = document.getElementById('canvas');
    const { clientX, clientY } = event;

    // to compensate for the offset
    const x = clientX - canvas.offsetLeft;
    const y = clientY - canvas.offsetTop;
    // we push the new coordonates to trace the line
    setPoints((prevState) => [...prevState, x, y]);
  };

  // clear the map of lines and points
  const handleClearButtonClickOnMap = () => {
    setPoints([]);
  };

  // == Functions tied to the map form => gets the name of the flight plan
  // handles the input value in the form to creat a new flight plan
  const handleChangeMapForm = (event) => {
    setInputValue(event.target.value);
  };

  // create a new flight plan with the name info and shows it on the right column
  const createFlightPlan = (name, coordinates) => {
    const highestId = getHighestId();
    const newId = highestId + 1;
    const newFlightPlan = {
      id: newId,
      name: name,
      points: coordinates,
    };
    setFlightPlans((prevState) => [...prevState, newFlightPlan]);
    setInputValue('');
    setIsEmpty(false);
  };

  // handle the creation of the new flight plan when the button save is clicked
  const handleMapSubmit = (event) => {
    event.preventDefault();
    createFlightPlan(inputValue, points);
  };

  // == Function tied to the flight plan column
  // shows the lines/points on the map when the card is clicked
  const handleOnClickFlightCard = (id) => {
    const clickedFlightPlan = flightPlans.find((flightPlan) => flightPlan.id === id);
    setPoints(clickedFlightPlan.points);
  };

  // delete a flight card from the column
  const handleDeleteFlightCard = (id) => {
    // filter by id to delete the flight plan
    const filteredFlightPlans = flightPlans.filter((plan) => plan.id !== id);

    setFlightPlans(filteredFlightPlans);
    if (filteredFlightPlans.length === 0) {
      setIsEmpty(true);
    }
  };

  // delete all flights
  const handleDeleteAllFlightPlans = () => {
    setFlightPlans([]);
    setIsEmpty(true);
  };

  // confirmation modal for deleting all flights
  const submitDeleteFightCard = () => {
    confirmAlert({
      title: '⚠ Delete all flight plans',
      message: 'Are you sure about deleting all flight plans?',
      buttons: [
        {
          label: 'Delete',
          onClick: handleDeleteAllFlightPlans,
        },
        {
          label: 'Cancel',
          // onClick: () => alert('Click No'),
        },
      ],
    });
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="main--left-column">
          <Map
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
        <FlightPlans
          flightPlans={flightPlans}
          handleDeleteFlightCard={handleDeleteFlightCard}
          handleOnClick={handleOnClickFlightCard}
          handleDeleteAll={submitDeleteFightCard}
          isEmpty={isEmpty}
        />
      </main>
      <Footer />
    </div>
  );
};

// == Export
export default App;
