import React from 'react';

const PlanetItem = (props) => {

    return (

        <li className='planet-item' onClick={() => props.click(props.id)}>

            {props.suggestion}

        </li>
    );

}


export default PlanetItem;

