import React from 'react';
import { Link } from 'react-router-dom'
import Jumbotron from '../components/Jumbotron'
import HomeCard from '../components/HomeCard'

const Home = ({ planets, loading, error }) => {
    // I am creating separate arrays for particular planets in order to pass them as props to the Home Card components situated in respective card tabs further below
    const desertPlanets = planets.filter(planet => ['Geonosis', 'Tatooine', 'Tund'].includes(planet.name))
    const urbanPlanets = planets.filter(planet => ['Coruscant', 'Corellia', 'Skako'].includes(planet.name))
    const forestPlanets = planets.filter(planet => ['Endor', "Dagobah", 'Rodia'].includes(planet.name))

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
                    <div className="col-md-3">
                        <h2 className="mb-4">See our choices by the terrain type:</h2>
                        <div className="list-group" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action active" id="list-deserts-list" data-toggle="list" href="#list-deserts" role="tab" aria-controls="deserts" >Deserts</a>
                            <a className="list-group-item list-group-item-action" id="list-urban-list" data-toggle="list" href="#list-urban" role="tab" aria-controls="urban" >Urban</a>
                            <a className="list-group-item list-group-item-action" id="list-forests-list" data-toggle="list" href="#list-forests" role="tab" aria-controls="forests" >Forests</a>
                            <Link to="/planets" className="list-group-item list-group-item-action bg-color1 text-color4 " role="tab" aria-controls="Archives">See All</Link>
                        </div>
                    </div>
                    <div className="col-md-9 ">
                        <div className="row">
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="list-deserts" role="tabpanel" aria-labelledby="list-deserts-list">
                                    <div className="row">
                                        <HomeCard
                                            planets={desertPlanets}
                                        />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="list-urban" role="tabpanel" aria-labelledby="list-urban-list">
                                    <div className="row">
                                        <HomeCard
                                            planets={urbanPlanets}
                                        />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="list-forests" role="tabpanel" aria-labelledby="list-forests-list">
                                    <div className="row">
                                        <HomeCard
                                            planets={forestPlanets}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>

    );
}

export default Home;