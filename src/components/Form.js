import React from 'react';
import GoButton from '../components/GoButton';
import Autosuggest from '../components/Autosuggest';
import Modal from '../components/Modal';
import '../styles/Form.scss';

const Form = (props) => {
    // const isEnabled = props.suggestions.length > 0;
    // // console.log(isEnabled)
    return (

        <form className="search">
            <Modal show={props.show} closeModal={props.closeModal} />
            <span className="search__tip">{!props.planet.value && !props.suggestions.toString() ? 'Insert the first letter' : null}</span>
            <span className="search__tip">{props.planet.value && props.suggestions.toString() ? 'Choose from the list' : null}</span>
            <span className="search__tip">{props.planet.value && !props.suggestions.toString() ? 'Click "Go" button' : null}</span>
            <div className="search__body">
                <input className="search__body-input"
                    type='text'
                    placeholder='Insert the name of a planet'
                    value={props.value}
                    onChange={props.change}
                />
                {/* <button disabled> */}
                <GoButton planet={props.planet} showModal={props.showModal} />
                {/* </button> */}

            </div>
            <Autosuggest suggestions={props.suggestions} click={props.click} planet={props.planet} />


        </form>


    );
}

export default Form;