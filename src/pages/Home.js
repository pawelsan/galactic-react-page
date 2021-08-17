import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import CheckboxContainer from "../components/CheckboxContainer";
import SmallCardContainer from "../components/SmallCardContainer";
import PlanetContext from "../store/planet-context";

const Home = () => {
  const { planets, loading, error } = useContext(PlanetContext);
  const [checkedTerrains, setCheckedTerrains] = useState(["desert"]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  const handleCheckedTerrains = (e) => {
    const clickedTerrain = e.target.value;
    setCheckedTerrains((prevTerrainList) => {
      if (prevTerrainList.includes(clickedTerrain)) {
        return prevTerrainList.filter((item) => item !== clickedTerrain);
      } else {
        return [...prevTerrainList, clickedTerrain];
      }
    });
  };

  useEffect(() => {
    let tempList = [];
    planets.forEach((planet) => {
      let filteredTempList = [];
      let checkList = [];
      for (let i = 0; i < checkedTerrains.length; i++) {
        if (planet.terrain.includes(checkedTerrains[i])) {
          checkList.push(true);
        } else {
          checkList.push(false);
        }
      }
      if (!checkList.includes(false) && !tempList.includes(planet)) {
        tempList.push(planet);
      }
      if (checkList.includes(false) && tempList.includes(planet)) {
        filteredTempList = tempList.filter((item) => item.name !== planet.name);
        tempList = [...filteredTempList];
      }
    });
    setFilteredPlanets([...tempList]);
  }, [checkedTerrains, planets]);

  let mainContent;

  if (error) {
    mainContent = (
      <div className="row no-gutters mt-3 d-flex justify-content-center">
        <h2>{error}</h2>
      </div>
    );
  } else if (loading) {
    mainContent = (
      <div className="spinner-border mt-3" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else if (!filteredPlanets.length) {
    mainContent = (
      <div className="row no-gutters mt-3 d-flex justify-content-center">
        <h2>No match</h2>
      </div>
    );
  } else {
    mainContent = <SmallCardContainer planets={filteredPlanets} />;
  }

  return (
    <>
      <Jumbotron />
      <div className="container">
        <div className="d-flex">
          <CheckboxContainer
            checkedTerrains={checkedTerrains}
            handleCheckedTerrains={handleCheckedTerrains}
          />
          <div>{mainContent}</div>
        </div>
        <div>
          <Link
            to="/planets"
            className="nav-link mt-3 btn-color1 text-color4"
            role="button"
            aria-controls="Archives"
          >
            See All
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
