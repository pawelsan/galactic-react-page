import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png'
import '../styles/Navigation.scss'

const list = [
    { name: 'Home', breadcrumb: () => <h2>Home</h2>, path: '/', exact: true },
    { name: 'About', breadcrumb: () => <h2>About</h2>, path: '/about' },
    { name: 'Galactic Archives', breadcrumb: () => <h2>Galactic Archives</h2>, path: '/planets' },
    { name: 'Contact', breadcrumb: () => <h2>Contact</h2>, path: '/contact' }
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
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarMenu"></div>
                <ul className="navbar-nav navbar-right">
                    {menu}
                </ul>
            </div>
        </nav>

    );
}

export default Navigation;