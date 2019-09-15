import React from 'react';
import { NavLink } from 'react-router-dom';
const About = () => {
    return (
        <>
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
                            About me
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="container">
                <div className='row no-gutters'>
                    <div className="col-md-4 bg-color4 d-flex flex-column">
                        <div className="m-3">
                            <img src={require(`../images/foto.png`)} alt="" className="card-img-top p-1 bg-color2" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="p-3 bg-color4">
                            <p className="text-lg text-color2">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default About;