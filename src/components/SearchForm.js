import React from 'react';
import PlanetListItem from '../components/PlanetListItem';
// import Modal from '../components/Modal';



const SearchForm = ({ value, suggestions, change }) => {
    // const isEnabled = props.suggestions.length > 0;
    // // console.log(isEnabled)


    return (
        <form>
            <div className="form-group">
                <div className="row no-gutters">
                    <div className="col-12">
                        <label htmlFor="form-input" className="text-color2">{!value && !suggestions.toString() ? 'Insert the first letter' : null}</label>
                        <label htmlFor="form-input" className="text-color2">{value && suggestions.toString() ? 'Choose from the list' : null}</label>
                        <label htmlFor="form-input" className="text-color2">{value && !suggestions.toString() ? `We have not recorded a planet named "${value.toUpperCase()}" in our archives` : null}</label>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-6">
                        <input
                            autoComplete="off"
                            className="form-control form-control text-color4 bg-color2 border-color3"
                            type="text"
                            value={value}
                            onChange={change}
                        />
                    </div>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-12">
                    <ul className="planet-list">
                        {suggestions.map(planet =>
                            <PlanetListItem
                                planet={planet}
                            />
                        )}
                    </ul>
                </div>
            </div>
        </form>

        // <>
        //     {/* <Modal show={props.show} closeModal={props.closeModal} /> */}

        //     <form method="POST" data-netlify="true"
        //     // className="search"
        //     >

        //         <div className="form-group">
        //             <div className="row no-gutters">
        //                 <div className="col-12">
        //                     <label htmlFor="form-input" className="search__tip">{!props.value && !props.suggestions.toString() ? 'Insert the first letter' : null}</label>
        //                     <label htmlFor="form-input" className="search__tip">{props.value && props.suggestions.toString() ? 'Choose from the list' : null}</label>
        //                     {/* <label htmlFor="form-input" className="search__tip">{props.value && !props.planet.name && !props.suggestions.toString() ? `We have not recorded a planet named "${props.planet.value.toUpperCase()}" in our archives` : null}</label> */}
        //                     {/* <label htmlFor="form-input" className="search__tip">{props.planet.value && !props.suggestions.toString() && props.planet.name ? 'Click "Go" button' : null}</label> */}
        //                 </div>
        //             </div>
        //             <div className="row no-gutters">
        //                 <div className="col-5">
        //                     {/* <label for="form-input"> Search </label> */}
        //                     <input autoComplete="off" className="form-control form-control bg-color5 border-color3"
        //                         type='text'
        //                         id="form-input"
        //                         placeholder='Insert the first letter'
        //                         value={props.value}
        //                         onChange={props.change}
        //                     />
        //                     {/* <small className="form-text text-muted">Insert the first letter</small> */}
        //                     {/* <button disabled> */}
        //                 </div>
        //                 <div className="col-2">
        //                     {/* <GoButton planet={props.planet}

        //                         show={props.show} showModal={props.showModal}
        //                         /> */}
        //                     {/* </button> */}
        //                 </div>
        //                 {/* <div className="col-5">
        //                         <FullListButton
        //                             planet={props.planet}
        //                             click={props.click}
        //                         />
        //                     </div> */}
        //             </div>
        //         </div>
        //         <Autosuggest
        //             suggestions={props.suggestions}
        //             // click={props.click} 
        //             planets={props.planets} />


        //     </form>
        // </>
    );
}


export default SearchForm;