import React from 'react';
import { Link } from "react-router-dom";
import Jumbotron from '../components/Jumbotron'
import HomeCard from '../components/HomeCard'

const Home = ({ planets, loading, error }) => {
    // I am creating separate arrays for particular planets in order to pass them as props to the Home Card components situated in respective card tabs further below
    const desertPlanets = planets.filter(planet => ['Geonosis', 'Tatooine', 'Tund'].includes(planet.name))
    const urbanPlanets = planets.filter(planet => ['Coruscant', 'Corellia', 'Skako'].includes(planet.name))
    const forestPlanets = planets.filter(planet => ['Endor', "Dagobah", 'Rodia'].includes(planet.name))


    return (
        <>
            {<Jumbotron />}
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li>
                            Home
                        </li>
                    </ol>
                </nav>
                <main className="row">
                    <div className="col-md-3 mt-2">
                        <div className="list-group" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action active" id="list-deserts-list" data-toggle="list" href="#list-deserts" role="tab" aria-controls="deserts" >Deserts</a>
                            <a className="list-group-item list-group-item-action" id="list-urban-list" data-toggle="list" href="#list-urban" role="tab" aria-controls="urban" >Urban</a>
                            <a className="list-group-item list-group-item-action" id="list-forests-list" data-toggle="list" href="#list-forests" role="tab" aria-controls="forests" >Forests</a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        {error
                            ?
                            <div className="row no-gutters mt-3 d-flex justify-content-center">
                                <h2>Something went wrong...</h2>
                            </div>
                            :
                            <div className="d-flex justify-content-center">
                                {
                                    loading
                                        ?
                                        <div className="spinner-border mt-3" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                        :
                                        <div className="row tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="list-deserts" role="tabpanel" aria-labelledby="list-deserts-list">
                                                <HomeCard
                                                    planets={desertPlanets}
                                                    loading={loading}
                                                    error={error}
                                                />
                                            </div>
                                            <div className="tab-pane fade" id="list-urban" role="tabpanel" aria-labelledby="list-urban-list">
                                                <HomeCard
                                                    planets={urbanPlanets}
                                                    loading={loading}
                                                    error={error}
                                                />
                                            </div>
                                            <div className="tab-pane fade" id="list-forests" role="tabpanel" aria-labelledby="list-forests-list">
                                                <HomeCard
                                                    planets={forestPlanets}
                                                    loading={loading}
                                                    error={error}
                                                />
                                            </div>
                                        </div>
                                }
                            </div>
                        }
                        <div className="row no-gutters d-flex justify-content-center">
                            <Link to="/planets" className="nav-link mt-3 btn-color1 text-color4" role="button" aria-controls="Archives">See All</Link>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Home;