import React from 'react';
import { Link } from "react-router-dom";

const PlanetItem = ({ planet }) => {
    console.log(planet)
    return (
        <li key={planet.name} className='planet-item list-group-item d-block bg-color2 cursor-pointer'>
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
                    }
                }}
            >
                {planet.name}
            </Link>
        </li>

    );

}


export default PlanetItem;

