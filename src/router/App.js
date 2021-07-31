import React from "react";
import { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PlanetContext from "../store/planet-context";
import "bootstrap/dist/js/bootstrap";
import Navigation from "../layouts/Navigation";
import Main from "../layouts/Main";
import Footer from "../layouts/Footer";
import useFetchData from "../hooks/useFetchData";

const App = () => {
  const [planets, setPlanets] = useState([]);

  const transformPlanetData = useCallback((planetData) => {
    setPlanets(
      planetData
        .filter((planet) => planet.name !== "unknown")
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
    );
  }, []);

  const { isLoading, error, fetchRequest } = useFetchData(transformPlanetData);

  useEffect(() => {
    fetchRequest();
  }, [fetchRequest]);

  return (
    <Router>
      <PlanetContext.Provider
        value={{ planets: planets, loading: isLoading, error: error }}
      >
        <Navigation />
        <Main />
        <Footer />
      </PlanetContext.Provider>
    </Router>
  );
};

export default App;
