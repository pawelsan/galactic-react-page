import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PlanetProvider from "./store/PlanetProvider";
import "bootstrap/dist/js/bootstrap";
import Navigation from "./layouts/Navigation";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <Router>
      <PlanetProvider>
        <Navigation />
        <Main />
        <Footer />
      </PlanetProvider>
    </Router>
  );
};

export default App;
