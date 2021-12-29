import React from 'react';
import './App.css';
import Welcome from "./views/Welcome";
import Sightseeing from "./views/Sightseeing";
import Tours from "./views/Tours";
import Contacts from "./views/Contacts";
import Header from "./shared/Header/Header";
import Footer from "./shared/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Welcome />
        <Sightseeing />
        <Tours />
        <Contacts />
        <Footer />
    </div>
  );
}

export default App;
