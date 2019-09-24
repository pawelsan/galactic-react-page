import React from 'react';
import { Link } from 'react-router-dom'
import Jumbotron from '../components/Jumbotron'
import '../styles/picture.scss'
const Home = () => {
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
                                        <div className="col-md-4">
                                            <div className="card">
                                                <img src={require(`../images/rock.jpg`)} alt="" className="card-img-top picture-small" />
                                                <div className="card-body">
                                                    <h3 className="card-title mb-0">GEONOSIS</h3>
                                                    <p className="mt-0">Population: 100 billion</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card">
                                                <img src={require(`../images/barren.jpg`)} alt="" className="card-img-top picture-small" />
                                                <div className="card-body">
                                                    <h3 className="card-title mb-0">TUND</h3>
                                                    <p className="mt-0">Population: 0</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <img src={require(`../images/deserts.jpg`)} alt="" className="card-img-top picture-small" />
                                                <div className="card-body">
                                                    <h3 className="card-title mb-0">TATOOINE</h3>
                                                    <p className="mt-0">Population: 0.0002 billion</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="list-urban" role="tabpanel" aria-labelledby="list-urban-list">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card mb-4">
                                                <img src={require(`../images/cityscape.jpg`)} alt="" className="card-img-top picture-small" />
                                                <div className="card-body">
                                                    <h3 className="card-title mb-0">CORUSCANT</h3>
                                                    <p className="mt-0">Population: 1000 billion</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card">
                                                <img src={require(`../images/cityscape.jpg`)} alt="" className="card-img-top picture-small" />
                                                <div className="card-body">
                                                    <h3 className="card-title mb-0">CORELLIA</h3>
                                                    <p className="mt-0">Population: 3 billion</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <img src={require(`../images/cityscape.jpg`)} alt="" className="card-img-top picture-small" />
                                                <div className="card-body">
                                                    <h3 className="card-title mb-0">SKAKO</h3>
                                                    <p className="mt-0">Population: 500 billion</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="list-forests" role="tabpanel" aria-labelledby="list-forests-list">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card mb-4">
                                                <img src={require(`../images/forests.jpg`)} alt="" className="card-img-top picture-small" />
                                                <div className="card-body">
                                                    <h3 className="card-title mb-0">ENDOR</h3>
                                                    <p className="mt-0">Population: 0.03 billion</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card">
                                                <img src={require(`../images/swamp.jpg`)} alt="" className="card-img-top picture-small" />
                                                <div className="card-body">
                                                    <h3 className="card-title mb-0">DAGOBAH</h3>
                                                    <p className="mt-0">Population: unknown</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <img src={require(`../images/jungles.jpg`)} alt="" className="card-img-top picture-small" />
                                                <div className="card-body">
                                                    <h3 className="card-title mb-0">RODIA</h3>
                                                    <p className="mt-0">Population: 1.3 billion</p>
                                                </div>
                                            </div>
                                        </div>
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