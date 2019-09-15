import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const PlanetPage = (props) => {
    const { name, diameter, gravity, rotation, orbit, climate, water, terrain, population } = props.location.state
    const terrainTypes = props.location.state.terrain.split(', ');
    // The array which has the terrain types that are in accordance with the names of available images and the selection of terrain types from the JSON file
    const terrainPictures = ['airless asteroid', 'barren', 'cityscape', 'cloudsea', 'desert', 'deserts', 'forests', 'gas giant', 'grass', 'jungles', 'lakes', 'mountain ranges', 'mountains', 'ocean', 'rainforests', 'rock', 'rocky', 'savanna', 'swamp', 'urban', 'volcanoes']
    const intersection = terrainTypes.filter(terrain => terrainPictures.includes(terrain));
    console.log(intersection)
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
                                // className="nav-link"
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
                                // className="nav-link"
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
            {/* In this component I relied mainly on Bootstrap 4 classes including flex and grid */}
            <div className="container">
                <div className='d-flex p-2 align-items-center' style={{ height: '500px' }} >
                    <div className='card border border-color2' style={{ width: '100%' }}>
                        <div className='row no-gutters'>
                            <div className="col-md-4 bg-color4 d-flex justify-content-center pt-3">
                                <h1 className='card-title d-inline font-weight-bold text-color2'>{name.toUpperCase()}</h1>
                            </div>
                            <div className="col-md-8 bg-color4 d-flex flex-column justify-content-center">
                                <div className="d-flex flex-row-reverse pr-4">
                                    <Link to="/planets" className="card-link p-2 text-color2 border border-color2"> >>Return</Link>
                                </div>
                            </div>
                        </div>


                        <div className='row no-gutters'>
                            <div className="col-md-4 bg-color4 d-flex flex-column">
                                <div className="ml-3 mt-3">
                                    <img src={require(`../images/${intersection[0]}.jpg`)} alt="" className="card-img-top p-1 bg-color2" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body d-flex flex-column p-3 bg-color4">

                                    <ul className='list-group list-group-flush'>
                                        <li className='card-text list-group-item bg-color2'>Diameter: {diameter === 'unknown' || '0' ? 'unknown' : `${diameter} kilometers`}</li>
                                        <li className='card-text list-group-item bg-color2'>Gravity: {gravity}</li>
                                        <li className='card-text list-group-item bg-color2'>A day's length is {rotation} hours</li>
                                        <li className='card-text list-group-item bg-color2'>A year's length is {orbit} days</li>
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