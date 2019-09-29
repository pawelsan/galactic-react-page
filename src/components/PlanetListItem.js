import React from 'react';
import { Link } from "react-router-dom";

const PlanetListItem = ({ planet }) => {
    return (
        <li key={planet.name} className='planet-list__item'>
            <Link
                className="planet-list__link"
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


export default PlanetListItem;

