import React from 'react';
import { Link } from "react-router-dom";
const GoButton = (props) => {
    const { name, diameter, climate, terrain, population } = props.planet;
    if (props.planet.value && props.planet.name && !props.planet.suggestions.toString()) {
        return (
            <button type="button" className="search__body-btn">

                <Link
                    // className="search__body-btn"
                    to={{
                        pathname: `/planet/${name}`,
                        state: {
                            err: false,
                            name: name,
                            diameter: diameter,
                            climate: climate,
                            terrain: terrain,
                            population: population
                        }
                    }}
                >
                    {/* {name ? "Go" : null} */}
                    Go
        </Link>
            </button>

        );
    }
    else {
        return (

            <button type="button" className="search__body-btn disabled" onClick={props.showModal}>Go</button>

        )
    }
}

export default GoButton;