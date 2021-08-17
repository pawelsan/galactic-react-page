import React from "react";
import SmallCardItem from "../components/SmallCardItem";
import "../styles/HomeCard.scss";

const SmallCardContainer = ({ planets }) => {
  // The array which has the terrain types that are in accordance with the names of available images and the selection of terrain types from the JSON file
  const terrainPictures = [
    "barren",
    "cityscape",
    "desert",
    "forests",
    "jungles",
    "rainforests",
    "rock",
    "swamp",
    "urban",
    "volcanoes",
  ];

  return (
    <div className="row">
      {planets.map((planet) => (
        <SmallCardItem
          key={planet.name}
          planet={planet}
          terrainPictures={terrainPictures}
        />
      ))}
    </div>
  );
};

export default SmallCardContainer;
