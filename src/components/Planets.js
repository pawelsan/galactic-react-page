import React from 'react';
import PlanetItem from '../components/PlanetItem';

const Planets = ({ planets, loading, error }) => {

    return (
        <ul className="search__suggestions">
            {planets.map(planet =>
                <PlanetItem
                    planet={planet}
                />
            )}
        </ul>
    );
}

export default Planets;
