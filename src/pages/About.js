import React from 'react';
const About = () => {
    return (

        <div className='d-flex p-2 align-items-center' style={{ height: 'S00px' }} >
            <div className='card border border-color2' style={{ width: '100%' }}>
                <div className='row no-gutters'>
                    <div className="col-md-4 bg-color3 d-flex flex-column justify-content-center">
                        <img src={require(`../images/foto.png`)} alt="" className="card-img-top p-2 bg-color4" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body d-flex flex-column p-3 bg-color3">
                            <div className="d-flex">
                                <h1 className='card-title d-inline flex-grow-1 font-weight-bold'>aaa</h1>

                            </div>
                            <ul className='list-group list-group-flush'>
                                <li className='card-text list-group-item bg-color4'>Diameter:</li>
                                <li className='card-text list-group-item bg-color4'>Climate: </li>
                                <li className='card-text list-group-item bg-color4'>Terrain type:</li>
                                <li className='card-text list-group-item bg-color4'>Population: </li>
                                <li className='card-text list-group-item bg-color4'>Population density: </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default About;