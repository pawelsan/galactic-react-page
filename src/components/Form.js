import React from 'react';
import GoButton from '../components/GoButton';
import Autosuggest from '../components/Autosuggest';
// import Modal from '../components/Modal';
import FullListButton from '../components/FullListButton';
import '../styles/Form.scss';

const Form = (props) => {
    // const isEnabled = props.suggestions.length > 0;
    // // console.log(isEnabled)
    return (
        <>
            {/* <Modal show={props.show} closeModal={props.closeModal} /> */}

            <form
            // className="search"
            >
                {/* <span className="search__tip">{!props.planet.value && !props.suggestions.toString() ? 'Insert the first letter' : null}</span>
            <span className="search__tip">{props.planet.value && props.suggestions.toString() ? 'Choose from the list' : null}</span>
            <span className="search__tip">{props.planet.value && !props.suggestions.toString() ? 'Click "Go" button' : null}</span> */}

                <div className="form-group">
                    <div className="row no-gutters">
                        <div className="col-5">
                            {/* <label for="form-input"> Search </label> */}
                            <input className="form-control form-control bg-color5 border-color3"
                                type='text'
                                id="form-input"
                                placeholder='Insert the first letter'
                                value={props.value}
                                onChange={props.change}
                            />
                            {/* <small className="form-text text-muted">Insert the first letter</small> */}
                            {/* <button disabled> */}
                        </div>
                        <div className="col-2">
                            <GoButton planet={props.planet}

                            // show={props.show} showModal={props.showModal}
                            />
                            {/* </button> */}
                        </div>
                        <div className="col-5">
                            <FullListButton
                                planet={props.planet}
                                click={props.click}
                            />
                        </div>
                    </div>
                </div>
                <Autosuggest suggestions={props.suggestions} click={props.click} planet={props.planet} />


            </form>
        </>

    );
}

export default Form;