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
  console.log('test');
  const [inputValue, setInputValue] = useState('');

  const handleChangeMapForm = (event) => {
    setInputValue(event.target.value);
  };

  const handleMapSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="main--left-column">
          <Map />
          <MapForm
            handleOnSubmit={handleMapSubmit}
            handleChange={handleChangeMapForm}
            inputValue={inputValue}
          />
        </div>
        <FlightPlans />
      </main>
      <Footer />
    </div>
  );
};

// == Export
export default App;
