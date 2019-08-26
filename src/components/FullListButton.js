import React from 'react';
import PlanetItem from './PlanetItem';
import '../styles/FullList.scss';

const FullListButton = (props) => {
    const { populationList } = props.planet;
    const add = (a, b) => a + b;
    const populationSum = populationList.reduce(add, 0)



    return (
        <>
            <button type="button" className="btn btn-color3 text-color1 border-color1" data-toggle="modal" data-target="#modal2">or see the full list!</button>


            <div id="modal2" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl " role="document">
                    <div className="modal-content p-3 bg-color5">
                        <div className="full-list">
                            <div className="modal-header">
                                <div className="row no-gutters">
                                    <div className="col-12"></div>
                                    <h5 className="modal-title" id="modal2Label">Currently there are {props.planet.fullList.length} planets, moons, and asteroids in the archives</h5>
                                    <p>The total humanoid population of the galaxy is approximately {(populationSum / 1000000000000).toFixed(3)} trillion</p>

                                </div>
                            </div>
                            <div className="modal-body">

                                {/* <h2 className="full-list__title">Currently there are {props.planet.fullList.length} planets, moons, and asteroids in the archives</h2> */}
                                {/* <h3>The total humanoid population of the galaxy is approximately {(populationSum / 1000000000000).toFixed(3)} trillion</h3> */}
                                <ul className='list-group list-group-flush d-flex flex-column flex-wrap' style={{ height: '70vh' }} >{props.planet.fullList.map(item => (<PlanetItem click={props.click} id={item} key={item} suggestion={item} planet={props.planet} />))}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FullListButton;