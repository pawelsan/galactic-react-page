import React from 'react';

const Planets = ({ planets, loading, error }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    else if (error) {
        return <h2>Something went wrong...</h2>

    }

    return (
        <ul className="list-group mb-4">
            {planets.map(planet => (
                <li key={planet.name} className="list-group-item">
                    {planet.name}
                </li>
            ))}
        </ul>
    );
}

export default Planets;
