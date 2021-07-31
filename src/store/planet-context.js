import { createContext } from "react";

const PlanetContext = createContext({
  planets: [],
  error: "",
  loading: false,
});

export default PlanetContext;
