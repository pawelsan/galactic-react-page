import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.scss'

const list = [
    { name: 'home', path: '/', exact: true },
    { name: 'about', path: '/about' },
    { name: 'galactic archives', path: '/planets' },
    { name: 'contact', path: '/contact' }
]

const Navigation = () => {

    const menu = list.map(item => (
        <li
            key={item.name}
            className="menu__item">
            <NavLink
                to={item.path}
                exact={item.exact ? item.exact : false}
                className="menu__link text-decoration-none"
                activeClassName="menu__link--active" >
                {item.name}
            </NavLink>
        </li>
    ))
    return (
        <div>
            <nav className="menu">
                <ul className="menu__list">
                    {menu}
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;