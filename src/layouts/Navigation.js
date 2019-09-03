import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png'
import '../styles/Navigation.scss'

const list = [
    { name: 'Home', path: '/', exact: true },
    { name: 'About', path: '/about' },
    { name: 'Galactic Archives', path: '/planets' },
    // { name: 'Contact', path: '/contact' }
]

const Navigation = () => {

    const menu = list.map(item => (
        <li
            key={item.name}
            className="nav-item">
            <NavLink
                to={item.path}
                exact={item.exact ? item.exact : false}
                className="nav-link"
                activeClassName="active" >
                {item.name}
            </NavLink>
        </li>
    ))
    return (

        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
            <div className="container">
                <div className="logo"><img src={logo} alt="logo" className="logo__image" /></div>
                <a href="#" className="navbar-brand">
                    PH's Galactic Archives
                    </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarMenu">
                    <ul className="navbar-nav navbar-right">
                        {menu}
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navigation;