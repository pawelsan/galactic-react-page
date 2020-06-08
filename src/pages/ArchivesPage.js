import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PlanetList from '../components/PlanetList';
import PaginationNav from '../components/PaginationNav';
import SearchForm from '../components/SearchForm';
import '../styles/PlanetList.scss';



const ArchivesPage = ({ planets, loading, error }) => {
    const [value, setValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    // let postsPerPage = 10;

    //Get search suggestion list
    const suggestionValue = value.trim().toUpperCase();
    const suggestionLength = suggestionValue.length;
    const suggestions = planets.filter(planet => planet.name.toUpperCase().slice(0, suggestionLength) === suggestionValue);
    // suggestions.toString() ? postsPerPage = 60 : postsPerPage = 10;
    // value || suggestions.toString() ? postsPerPage = 60 : postsPerPage = 10

    //Get planets per each part of the long list
    const indexOfLastPlanet = currentPage * postsPerPage;
    const indexOfFirstPlanet = indexOfLastPlanet - postsPerPage;
    const currentPlanets = !suggestions.toString() ? planets.slice(indexOfFirstPlanet, indexOfLastPlanet) : suggestions.slice(indexOfFirstPlanet, indexOfLastPlanet)

    //Change parts of the long list
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handlePostsPerPage = () => {
        setPostsPerPage(10)
    }

    //Provide data for the page header
    const add = (a, b) => a + b;
    const populationList = planets.map(planet => planet.population * 1).filter(population => !isNaN(population)).sort()
    const populationSum = populationList.reduce(add, 0);

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
                                exact
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
            <div className="container galaxy-container galaxy-container-archives">
                <div>
                    <div className="galaxy-bg"></div>
                    <div className="row no-gutters d-flex justify-content-center">
                        {error
                            ?
                            <div className="my-2">
                                <h2>Something went wrong...</h2>
                            </div >
                            :
                            <div className="d-flex flex-column align-items-center">
                                <h1 className="planet-list__title">Search the Galactic Archives!</h1>
                                {loading
                                    ?
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    :
                                    <div className="d-flex flex-column align-items-center">
                                        <p>Currently there are {planets.length} planets, moons, and asteroids in the archives</p>
                                        <p>The total humanoid population of these objects is approximately {(populationSum / 1000000000000).toFixed(3)} trillion</p>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                    <div className="row no-gutters mt-5 d-flex flex-column align-items-center justify-content-around">
                        <div className="col-md-6">
                            <SearchForm
                                value={value}
                                suggestions={suggestions}
                                change={event => setValue(event.target.value)}
                                planets={planets}
                                loading={loading}
                                handlePostsPerPage={handlePostsPerPage}
                            />
                            <PlanetList
                                planets={currentPlanets}
                            />
                            <PaginationNav
                                postsPerPage={postsPerPage}
                                totalPosts={!suggestions.toString() ? planets.length : suggestions.length}
                                paginate={paginate}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default ArchivesPage;