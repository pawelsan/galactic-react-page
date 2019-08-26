import React from 'react';

const PlanetItem = (props) => {

    return (

        <li data-dismiss="modal" className='planet-item list-group-item d-block bg-color5 cursor-pointer' onClick={() => props.click(props.id)}>

            {props.suggestion}

        </li>
    );

}


export default PlanetItem;

