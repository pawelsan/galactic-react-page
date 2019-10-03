import React from 'react';

const SearchForm = ({ value, suggestions, change, loading }) => {

    return (
        <>
            {loading
                ?
                null
                :
                <form>
                    <div className="form-group">
                        <div className="row no-gutters d-flex justify-content-center">
                            <label htmlFor="form-input" className="mb-3 text-color2">{suggestions.toString() ? 'Insert the first letter to filter the list' : `We have not recorded a planet named "${value.toUpperCase()}" in our archives`}</label>
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
                    </div>
                </form>
            }
        </>
    );
}


export default SearchForm;