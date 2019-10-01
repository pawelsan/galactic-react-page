import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const PlanetPage = (props) => {
    const { name, diameter, gravity, rotation, orbit, climate, water, terrain, population } = props.location.state
    const terrainTypes = props.location.state.terrain.split(', ');
    // The array which has the terrain types that are in accordance with the names of available images and the selection of terrain types from the JSON file
    const terrainPictures = ['airless asteroid', 'barren', 'cityscape', 'cloudsea', 'desert', 'deserts', 'forests', 'gas giant', 'grass', 'jungles', 'lakes', 'mountain ranges', 'mountains', 'ocean', 'rainforests', 'rock', 'rocky', 'savanna', 'swamp', 'urban', 'volcanoes']
    // Aligning terrain types with respective images
    const intersection = terrainTypes.filter(terrain => terrainPictures.includes(terrain));
    return (
        <>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li
                            key='Home'
                            className="breadcrumb-item">
                            <NavLink
                                to='/'
                                exact='true'
                                className="text-color1"
                                activeClassName="active" >
                                Home
                            </NavLink>
                        </li>
                        <li
                            key='Home'
                            className="breadcrumb-item">
                            <NavLink
                                to='/planets'
                                exact='true'
                                className="text-color1"
                                activeClassName="active" >
                                Galactic Archives
                            </NavLink>
                        </li>
                        <li className="breadcrumb-item">
                            {name}
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="container">
                <div className='d-flex p-2 align-items-center'>
                    <div className='card border border-color2'>
                        <div className='row no-gutters'>
                            <div className="col-md-12 bg-color4 d-flex justify-content-between pt-3 pl-3">
                                <h1 className='card-title d-inline font-weight-bold text-color2'>{name.toUpperCase()}</h1>


                                <div className="d-flex flex-column justify-content-center pr-4">
                                    <Link to="/planets" className="btn btn-color1 text-color4">X</Link>
                                </div>
                            </div>
                        </div>


                        <div className='row no-gutters'>
                            <div className="col-md-4 bg-color4 d-flex flex-column">
                                <div className="m-3">
                                    <img src={require(`../images/${intersection[0]}.jpg`)} alt="" className="card-img-top p-1 bg-color2" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body d-flex flex-column bg-color4">

                                    <ul className='list-group list-group-flush'>
                                        <li className='card-text list-group-item bg-color2'>Diameter: {diameter === 'unknown' || '0' ? 'unknown' : `${diameter} kilometers`}</li>
                                        <li className='card-text list-group-item bg-color2'>Gravity: {gravity}</li>
                                        <li className='card-text list-group-item bg-color2'>{rotation !== 'unknown' ? `A day's length is ${rotation} hours` : `A day's length is ${rotation}`}</li>
                                        <li className='card-text list-group-item bg-color2'>{orbit !== 'unknown' ? `A year's length is ${orbit} hours` : `A year's length is ${orbit}`}</li>
                                        <li className='card-text list-group-item bg-color2'>Climate: {climate}</li>
                                        <li className='card-text list-group-item bg-color2'>Oceans cover {water} percent of this planet's surface</li>
                                        <li className='card-text list-group-item bg-color2'>Terrain type: {terrain}</li>
                                        <li className='card-text list-group-item bg-color2'>Population: {population === 'unknown' ? 'unknown' : `${population / 1000000000} billion`}</li>
                                        <li className='card-text list-group-item bg-color2'>Population density: {population === 'unknown' || diameter === '0' || 'unknown' ? 'unknown' : `${(population / (4 * Math.pow(diameter / 2, 2) * Math.PI)).toFixed(3)} per square km`}</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default PlanetPage;