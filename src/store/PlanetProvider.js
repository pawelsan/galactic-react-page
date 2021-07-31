import React, { useState, useCallback, useEffect } from "react";
import PlanetContext from "./planet-context";
import useFetchData from "../hooks/useFetchData";

const PlanetProvider = ({ children }) => {
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
    <PlanetContext.Provider
      value={{ planets: planets, loading: isLoading, error: error }}
    >
      {children}
    </PlanetContext.Provider>
  );
};

export default PlanetProvider;
