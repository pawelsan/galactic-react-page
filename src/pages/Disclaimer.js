import React from 'react';
import { NavLink } from 'react-router-dom'
const Disclaimer = () => {
    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li
                        key='Home'
                        className="breadcrumb-item">
                        <NavLink
                            to='/'
                            exact='true'
                            className="text-color1"
                            activeClassName="active" >
                            Home
                            </NavLink>
                    </li>
                    <li className="breadcrumb-item">
                        Disclaimer
                    </li>
                </ol>
            </nav>
            <div>
                <p>
                    <h1 className="display-4">The sources used in this website include:</h1>
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            <p>Data from <a href='https://swapi.co/api/planets/'>The Star Wars API</a></p>

                        </li>
                        <li className='list-group-item'>
                            <p>Pictures from <a href='https://pixabay.com/pl/'>Pixabay</a> in accordance with its License provisions.</p>
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default Disclaimer;