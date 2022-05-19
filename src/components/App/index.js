// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Map from 'src/components/Map';
import FlightPlans from 'src/components/FlightPlans';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <main className="main">
      <Map />
      <FlightPlans />
    </main>
    <Footer />
  </div>
);

// == Export
export default App;
