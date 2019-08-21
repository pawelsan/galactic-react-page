import React from 'react';
import { Link } from 'react-router-dom';

const PlanetPage = (props) => {
    console.log(props);
    return (
        <>
            <aside>
                <Link to="/planets">Powrót do listy planet</Link>
            </aside>
            <main>
                <div>
                    <h3>Search result for the planet named <em>{props.location.state.name.toUpperCase()}</em>:</h3>
                    <h4>Diameter is {props.location.state.diameter} </h4>
                    <h4>Climate: {props.location.state.climate}</h4>
                    <h4>Terrain type: {props.location.state.terrain}</h4>
                    <h4>Population {props.location.state.population / 1000000000} billion </h4>
                </div>
            </main>

        </>
    );
}

export default PlanetPage;