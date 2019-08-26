import React from 'react';
import { Link } from "react-router-dom";
const GoButton = (props) => {
    const { name, diameter, climate, terrain, population } = props.planet;
    console.log(props.show)
    console.log(props.showModal)
    if (props.planet.value && props.planet.name && !props.planet.suggestions.toString()) {
        return (
            // <button type="button"
            //     // className="search__body-btn"
            //     className="btn btn-color1 "
            // >

            <Link
                className="btn btn-color1 text-color3 text-decoration-none"
                role="button"
                to={{
                    pathname: `/planet/${name}`,
                    state: {
                        err: false,
                        name: name,
                        diameter: diameter,
                        climate: climate,
                        terrain: terrain,
                        population: population
                    }
                }}
            >
                {/* {name ? "Go" : null} */}
                Go
        </Link>
            // </button>

        );
    }
    else {
        return (
            <>
                <button type="button" className="btn btn-color5 border-color3" data-toggle="modal" data-target="#modal1">Go</button>
                {/* <button type="button" className="search__body-btn disabled" onClick={props.showModal}>Go</button> */}

                <div id="modal1" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="modal1Label" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modal1Label">Missing input</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Please insert the first letter and choose an item from the list
                        </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                // onClick={props.closeModal}
                                >Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default GoButton;