import React from 'react';
import { Link } from 'react-router-dom';


const PlanetPage = (props) => {
    const { name, diameter, climate, terrain, population } = props.location.state
    const terrainTypes = props.location.state.terrain.split(', ');
    const terrainPictures = ['airless asteroid', 'barren', 'cityscape', 'cloudsea', 'desert', 'deserts', 'forests', 'gas giant', 'grass', 'jungles', 'lakes', 'mountain ranges', 'mountains', 'ocean', 'rainforests', 'rocky', 'savanna', 'swamp', 'urban', 'volcanoes']
    const intersection = terrainTypes.filter(terrain => terrainPictures.includes(terrain));
    console.log(intersection)
    return (
        <>
            {/* In this component I relied mainly on Bootstrap 4 classes including flex and grid */}
            <div className='d-flex p-2 align-items-center' style={{ height: '500px' }} >
                <div className='card border border-color2' style={{ width: '100%' }}>
                    <div className='row no-gutters'>
                        <div className="col-md-4 bg-color3 d-flex flex-column justify-content-center">
                            <img src={require(`../images/${intersection[0]}.jpg`)} alt="" className="card-img-top p-2 bg-color4" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body d-flex flex-column p-3 bg-color3">
                                <div className="d-flex">
                                    <h1 className='card-title d-inline flex-grow-1 font-weight-bold'>{name.toUpperCase()}</h1>
                                    <Link to="/planets" className="card-link text-color1"> >>Return</Link>
                                </div>
                                <ul className='list-group list-group-flush'>
                                    <li className='card-text list-group-item bg-color4'>Diameter: {diameter === 'unknown' || '0' ? 'unknown' : `${diameter} kilometers`}</li>
                                    <li className='card-text list-group-item bg-color4'>Climate: {climate}</li>
                                    <li className='card-text list-group-item bg-color4'>Terrain type: {terrain}</li>
                                    <li className='card-text list-group-item bg-color4'>Population: {population === 'unknown' ? 'unknown' : `${population / 1000000000} billion`}</li>
                                    <li className='card-text list-group-item bg-color4'>Population density: {population === 'unknown' || diameter === '0' || 'unknown' ? 'unknown' : `${(population / (4 * Math.pow(diameter / 2, 2) * Math.PI)).toFixed(3)} per square km`}</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className='d-flex p-2 justify-content-center' style={{ width: '100%' }} >
                <Link to="/planets" className=" btn btn-lg btn-color3 text-color1">Powrót do listy planet</Link>
            </div> */}


            {/* <div className='d-flex p-2 justify-content-center' style={{ width: '100%' }} >
                <div className='card border border-color2' style={{ width: '550px' }}>
                    <img src={require(`../images/${intersection[0]}.jpg`)} alt="" className="card-img-top p-3 bg-color4" />
                    <div className="card-body d-flex flex-column p-3 bg-color3">
                        <h1 className='card-title'>{name.toUpperCase()}</h1>
                        <ul className='list-group list-group-flush'>
                            <li className='card-text list-group-item bg-color4'>Diameter: {diameter === 'unknown' ? 'unknown' : `${diameter} kilometers`}</li>
                            <li className='card-text list-group-item bg-color4'>Climate: {climate}</li>
                            <li className='card-text list-group-item bg-color4'>Terrain type: {terrain}</li>
                            <li className='card-text list-group-item bg-color4'>Population: {population === 'unknown' ? 'unknown' : `${population / 1000000000} billion`}</li>
                            <li className='card-text list-group-item bg-color4'>Population density: {(population / (4 * Math.pow(diameter / 2, 2) * Math.PI)).toFixed(2)} per square km</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='d-flex p-2 justify-content-center' style={{ width: '100%' }} >
                <Link to="/planets" className=" btn btn-lg btn-color3 text-color1">Powrót do listy planet</Link>
            </div> */}


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