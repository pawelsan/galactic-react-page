import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PaginationList from '../components/PaginationList';
import PaginationNav from '../components/PaginationNav';
import SearchForm from '../components/SearchForm';
import '../styles/PlanetList.scss';



const ArchivesPage = ({ planets, loading, error }) => {
    const [value, setValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 10;

    //Get search suggestion list
    const suggestionValue = value.trim().toUpperCase();
    const suggestionLength = suggestionValue.length;
    const suggestions = suggestionLength === 0 ? [] : planets.filter(planet => planet.name.toUpperCase().slice(0, suggestionLength) === suggestionValue);

    //Get planets per each part of the long list
    const indexOfLastPlanet = currentPage * postsPerPage;
    const indexOfFirstPlanet = indexOfLastPlanet - postsPerPage;
    const currentPlanets = planets.slice(indexOfFirstPlanet, indexOfLastPlanet)

    //Change parts of the long list
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    const add = (a, b) => a + b;
    const populationList = planets.map(planet => planet.population * 1).filter(population => !isNaN(population)).sort()
    const populationSum = populationList.reduce(add, 0);

    if (loading) {
        return (

            <div className="spinner-border loading-error" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    } else if (error) {
        return (
            <div className="loading-error">
                <h2>Something went wrong...</h2>
            </div >
        )
    }
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
                        <li className="breadcrumb-item">
                            Galactic Archives
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="container galaxy-container">
                <div className="galaxy-bg"></div>
                <div className="row no-gutters d-flex justify-content-center">
                    <div className="my-2 d-flex flex-column align-items-center">
                        <h1 className="planet-list__title">Search the Galactic Archives!</h1>
                        <p>Currently there are {planets.length} planets, moons, and asteroids in the archives</p>
                        <p>The total humanoid population of the galaxy is approximately {(populationSum / 1000000000000).toFixed(3)} trillion</p>

                        <SearchForm
                            value={value}
                            suggestions={suggestions}
                            change={event => setValue(event.target.value)}
                            planets={planets}
                        />

                        <PaginationNav
                            postsPerPage={postsPerPage}
                            totalPosts={planets.length}
                            paginate={paginate}
                        />
                        <PaginationList
                            planets={currentPlanets}
                        />
                    </div>
                </div>

            </div>
        </>
    );
}
export default ArchivesPage;