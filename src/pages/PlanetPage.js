import React from 'react';
import { Link } from 'react-router-dom';


const PlanetPage = (props) => {

    const terrainTypes = props.location.state.terrain.split(', ');
    const terrainPictures = ['airless asteroid', 'barren', 'cityscape', 'cloudsea', 'desert', 'deserts', 'forests', 'gas giant', 'grass', 'jungles', 'lakes', 'mountain ranges', 'mountains', 'ocean', 'rainforests', 'rocky', 'savanna', 'swamp', 'urban', 'volcanoes']
    const intersection = terrainTypes.filter(terrain => terrainPictures.includes(terrain));
    console.log(intersection)
    return (
        <>
            <div className='d-flex p-2 justify-content-center' style={{ width: '100%' }} >
                <div className='card' style={{ width: '550px' }}>
                    <img src={require(`../images/${intersection[0]}.jpg`)} alt="" className="card-img-top" />
                    <div className="card-body d-flex flex-column p-2 bg-color3">
                        <h1 className='card-title'>{props.location.state.name.toUpperCase()}</h1>
                        <ul className='list-group list-group-flush'>
                            <li className='card-text list-group-item bg-color4'>Diameter: {props.location.state.diameter === 'unknown' ? 'unknown' : `${props.location.state.diameter} kilometers`}</li>
                            <li className='card-text list-group-item bg-color4'>Climate: {props.location.state.climate}</li>
                            <li className='card-text list-group-item bg-color4'>Terrain type: {props.location.state.terrain}</li>
                            <li className='card-text list-group-item bg-color4'>Population: {props.location.state.population === 'unknown' ? 'unknown' : `${props.location.state.population / 1000000000} billion`}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='d-flex p-2 justify-content-center' style={{ width: '100%' }} >
                <Link to="/planets" className=" btn btn-lg btn-color3 text-color1">Powrót do listy planet</Link>
            </div>



            {/* <div>
                <h3>Search result for the planet named <em>{props.location.state.name.toUpperCase()}</em>:</h3>
                <img src={require(`../images/${intersection[0]}.jpg`)} alt="" className="planet__image" />
                <h4>Diameter: {props.location.state.diameter === 'unknown' ? 'unknown' : `${props.location.state.diameter} kilometers`}</h4>
                <h4>Climate: {props.location.state.climate}</h4>
                <h4>Terrain type: {props.location.state.terrain}</h4>
                <h4>Population: {props.location.state.population === 'unknown' ? 'unknown' : `${props.location.state.population / 1000000000} billion`}</h4>
            </div>
            <button className="btn btn-lg btn-color1">
                <Link to="/planets" className="text-color3">Powrót do listy planet</Link>
            </button> */}


        </>
    );
}

export default PlanetPage;