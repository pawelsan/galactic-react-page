import React from 'react';
import PlanetItem from './PlanetItem';
import '../styles/FullList.scss';
const FullList = (props) => {
    const { populationList } = props.planet;
    const add = (a, b) => a + b;
    const populationSum = populationList.reduce(add, 0)
    return (
        <div className="full-list">
            <h2 className="full-list__title">Currently there are {props.planet.fullList.length} planets, moons, and asteroids in the archives</h2>
            <h3>The total humanoid population of the galaxy is approximately {(populationSum / 1000000000000).toFixed(3)} trillion</h3>
            <ul className='full-list__wrapper'>{props.planet.fullList.map(item => (<PlanetItem click={props.click} id={item} key={item} suggestion={item} planet={props.planet} />))}</ul>

        </div>
    );
}

export default FullList;