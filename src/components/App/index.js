// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Map from 'src/components/Map';
import FlightPlans from 'src/components/FlightPlans';
import MapForm from 'src/components/MapForm';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <main className="main">
      <div className="main--left-column">
        <Map />
        <MapForm />
      </div>
      <FlightPlans />
    </main>
    <Footer />
  </div>
);

// == Export
export default App;
