import React from "react";
import { Link } from "react-router-dom";

const SmallCardItem = ({ planet, terrainPictures }) => (
  <div className="col-md-4">
    <Link
      className="d-block text-color4 text-decoration-none"
      role="button"
      to={{
        pathname: `/planet/${planet.name}`,
        state: {
          name: planet.name,
          diameter: planet.diameter,
          gravity: planet.gravity,
          rotation: planet.rotation_period,
          orbit: planet.orbital_period,
          climate: planet.climate,
          water: planet.surface_water,
          terrain: planet.terrain,
          population: planet.population,
        },
      }}
    >
      <div className="card mt-2 bg-color2">
        {/* I am changing the string to an array and then I am filtering this array with the img array */}
        <img
          src={require(`../images/${
            planet.terrain
              .split(", ")
              .filter((terrain) => terrainPictures.includes(terrain))[0]
          }.jpg`)}
          alt="landscape"
          className="card-img-top p-1"
        />
        <div className="card-body">
          <h3 className="card-title mb-0">{planet.name}</h3>
          <p className="mt-0">
            Population:{" "}
            {planet.population === "unknown"
              ? "unknown"
              : `${planet.population / 1000000000} billion`}
          </p>
        </div>
      </div>
    </Link>
  </div>
);

export default SmallCardItem;
