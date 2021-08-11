import React, { useState, useEffect, useCallback, useContext } from "react";
import Checkbox from "./UI/Checkbox";
import PlanetContext from "../store/planet-context";

const CheckboxContainer = ({ checkedTerrains, handleCheckedTerrains }) => {
  const { planets } = useContext(PlanetContext);
  const [terrainTypes, setTerrainTypes] = useState([]);

  const getTerrainTypes = useCallback(() => {
    let terrains = [];
    for (let i = 0; i < planets.length; i++) {
      terrains.push(...planets[i].terrain.split(", "));
    }
    const uniqueTerrainTypes = new Set(terrains);
    const terrainTypes = [...uniqueTerrainTypes];
    return terrainTypes.sort();
  }, [planets]);

  useEffect(() => {
    setTerrainTypes(getTerrainTypes());
  }, [getTerrainTypes, planets]);

  const checkboxList = terrainTypes.map((terrain, index) => (
    <Checkbox
      key={index}
      terrain={terrain}
      index={index}
      checked={checkedTerrains.includes(terrain)}
      onChange={handleCheckedTerrains}
    />
  ));

  return (
    <div>
      <span>Select your favourite terrain</span>
      <ul>{checkboxList}</ul>
    </div>
  );
};

export default CheckboxContainer;
