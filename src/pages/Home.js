import React from 'react';
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
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
                        <h2 className="mb-4">See our choices</h2>
                        <div className="list-group" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action active" id="list-urban-list" data-toggle="list" href="#list-urban" role="tab" aria-controls="urban" >Urban</a>
                            <a className="list-group-item list-group-item-action" id="list-deserts-list" data-toggle="list" href="#list-deserts" role="tab" aria-controls="deserts" >Deserts</a>
                            <a className="list-group-item list-group-item-action" id="list-forests-list" data-toggle="list" href="#list-forests" role="tab" aria-controls="forests" >Forests</a>
                            <Link to="/planets" className="list-group-item list-group-item-action" role="tab" aria-controls="Archives">See All</Link>
                            {/* <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile" >Enter the archives</a> */}
                        </div>
                    </div>
                    <div className="col-md-9 ">
                        <div className="row">
                            <div className="tab-content" id="nav-tabContent">

                                <div className="tab-pane fade show active" id="list-urban" role="tabpanel" aria-labelledby="list-urban-list">
                                    {/* <div className="tab-pane fade show active" id="list-urban" role="tabpanel" aria-labelledby="list-urban-list"> */}
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card mb-4">
                                                <img src={require(`../images/cityscape.jpg`)} alt="" className="card-img-top" />
                                                <div className="card-body">
                                                    <h3 className="card-title mb-0">Planeta</h3>
                                                    <p className="mt-0">planeta mała</p>
                                                </div>
                                                <div className="card-footer text-center">aaa</div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card">
                                                <img src={require(`../images/cityscape.jpg`)} alt="" className="card-img-top" />
                                                <div className="card-body">
                                                    <h3 className="card-title mb-0">Planeta</h3>
                                                    <p className="mt-0">planeta mała</p>
                                                </div>
                                                <div className="card-footer text-center">aaa</div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <img src={require(`../images/cityscape.jpg`)} alt="" className="card-img-top" />
                                                <div className="card-body">
                                                    <h3 className="card-title mb-0">Planeta</h3>
                                                    <p className="mt-0">planeta mała</p>
                                                </div>
                                                <div className="card-footer text-center">aaa</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </div>
                                <div className="tab-pane fade" id="list-deserts" role="tabpanel" aria-labelledby="list-deserts-list">
                                    {/* <div className="tab-pane fade show active" id="list-urban" role="tabpanel" aria-labelledby="list-urban-list"> */}
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card mb-4">
                                                <img src={require(`../images/deserts.jpg`)} alt="" className="card-img-top" />
                                                <div className="card-body">
                                                    <h3 className="card-title mb-0">Planeta</h3>
                                                    <p className="mt-0">planeta mała</p>
                                                </div>
                                                <div className="card-footer text-center">aaa</div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card">
                                                <img src={require(`../images/deserts.jpg`)} alt="" className="card-img-top" />
                                                <div className="card-body">
                                                    <h3 className="card-title mb-0">Planeta</h3>
                                                    <p className="mt-0">planeta mała</p>
                                                </div>
                                                <div className="card-footer text-center">aaa</div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <img src={require(`../images/deserts.jpg`)} alt="" className="card-img-top" />
                                                <div className="card-body">
                                                    <h3 className="card-title mb-0">Planeta</h3>
                                                    <p className="mt-0">planeta mała</p>
                                                </div>
                                                <div className="card-footer text-center">aaa</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </div>
                                <div className="tab-pane fade" id="list-forests" role="tabpanel" aria-labelledby="list-forests-list">
                                    {/* <div className="tab-pane fade show active" id="list-urban" role="tabpanel" aria-labelledby="list-urban-list"> */}
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card mb-4">
                                                <img src={require(`../images/forests.jpg`)} alt="" className="card-img-top" />
                                                <div className="card-body">
                                                    <h3 className="card-title mb-0">Planeta</h3>
                                                    <p className="mt-0">planeta mała</p>
                                                </div>
                                                <div className="card-footer text-center">aaa</div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card">
                                                <img src={require(`../images/forests.jpg`)} alt="" className="card-img-top" />
                                                <div className="card-body">
                                                    <h3 className="card-title mb-0">Planeta</h3>
                                                    <p className="mt-0">planeta mała</p>
                                                </div>
                                                <div className="card-footer text-center">aaa</div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <img src={require(`../images/forests.jpg`)} alt="" className="card-img-top" />
                                                <div className="card-body">
                                                    <h3 className="card-title mb-0">Planeta</h3>
                                                    <p className="mt-0">planeta mała</p>
                                                </div>
                                                <div className="card-footer text-center">aaa</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* </div> */}
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