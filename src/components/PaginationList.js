import React from 'react';
import PlanetListItem from '../components/PlanetListItem';

const PaginationList = ({ planets }) => {

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

export default PaginationList;
