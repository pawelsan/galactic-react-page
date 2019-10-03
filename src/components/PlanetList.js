import React from 'react';
import PlanetListItem from '../components/PlanetListItem';

const PlanetList = ({ planets }) => {

    return (
        <ul className="planet-list">
            {planets.map(planet =>
                <PlanetListItem
                    planet={planet}
                />
            )}
        </ul>
    );
}

export default PlanetList;
