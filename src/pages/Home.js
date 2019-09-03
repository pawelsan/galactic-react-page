import React from 'react';
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
                        <h2 className="mb-4">Kategorie</h2>
                        <div className="list-group">
                            <a className="list-group-item list-group-item-action active" href="#" >Category 1</a>
                            <a className="list-group-item list-group-item-action" href="#" >Category 2</a>
                            <a className="list-group-item list-group-item-action" href="#" >Category 3</a>
                            <a className="list-group-item list-group-item-action" href="#" >Category 4</a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <h2 className="mb-4">Produkty</h2>
                        <ul className="pagination">
                            <li className="page-item"><a href="" className="page-link">Previous</a></li>
                            <li className="page-item"><a href="" className="page-link">1</a></li>
                            <li className="page-item"><a href="" className="page-link">2</a></li>
                            <li className="page-item"><a href="" className="page-link">3</a></li>
                            <li className="page-item"><a href="" className="page-link">Next</a></li>
                        </ul>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4">
                                    <img src={require(`../images/foto.png`)} alt="" className="card-img-top" />
                                    <div className="card-body">
                                        <h3 className="card-title mb-0">Planeta</h3>
                                        <p className="mt-0">planeta mała</p>
                                    </div>
                                    <div className="card-footer text-center">aaa</div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card">
                                    <img src={require(`../images/foto.png`)} alt="" className="card-img-top" />
                                    <div className="card-body">
                                        <h3 className="card-title mb-0">Planeta</h3>
                                        <p className="mt-0">planeta mała</p>
                                    </div>
                                    <div className="card-footer text-center">aaa</div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={require(`../images/foto.png`)} alt="" className="card-img-top" />
                                    <div className="card-body">
                                        <h3 className="card-title mb-0">Planeta</h3>
                                        <p className="mt-0">planeta mała</p>
                                    </div>
                                    <div className="card-footer text-center">aaa</div>
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