import React from 'react';
import PlanetListItem from '../components/PlanetListItem';

const SearchForm = ({ value, suggestions, change }) => {

    return (
        <form>
            <div className="form-group">
                <div className="row no-gutters d-flex justify-content-center">
                    <label htmlFor="form-input" className="mb-3 text-color2">{!value && !suggestions.toString() ? 'Insert the first letter' : null}</label>
                    <label htmlFor="form-input" className="mb-3 text-color2">{value && suggestions.toString() ? 'Choose from the list' : null}</label>
                    <label htmlFor="form-input" className="mb-3 text-color2">{value && !suggestions.toString() ? `We have not recorded a planet named "${value.toUpperCase()}" in our archives` : null}</label>
                </div>
                <div className="row no-gutters mb-3">
                    <input
                        autoComplete="off"
                        className="form-control text-color4 bg-color2 border-color3"
                        type="text"
                        value={value}
                        onChange={change}
                    />
                </div>

                <ul className="planet-list">
                    {suggestions.map(planet =>
                        <PlanetListItem
                            planet={planet}
                        />
                    )}
                </ul>

            </div>
        </form>
    );
}


export default SearchForm;