import React from 'react';
import PlanetItem from './PlanetItem';


const Autosuggest = (props) => {

    const Suggestions = props.suggestions.map(suggestion => <PlanetItem
        // click={props.click} 
        id={suggestion} key={suggestion} suggestion={suggestion} planets={props.planets} />)
    console.log(Suggestions)
    return (
        <ul className="search__suggestions">

            {props.value && props.suggestions.toString() ? Suggestions : null}

        </ul>
    );
}

export default Autosuggest;