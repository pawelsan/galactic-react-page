import React from 'react';
import PlanetItem from './PlanetItem';


const Autosuggest = (props) => {

    const Suggestions = props.suggestions.filter(name => name !== 'unknown').map(suggestion => <PlanetItem click={props.click} id={suggestion} key={suggestion} suggestion={suggestion} planet={props.planet} />)
    console.log(Suggestions)
    return (
        <ul className="search__suggestions">

            {props.planet.value && props.suggestions.toString() ? Suggestions : null}

        </ul>
    );
}

export default Autosuggest;