import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.scss'

const list = [
    { name: 'start', path: '/', exact: true },
    { name: 'o mnie', path: '/about' },
    { name: 'planets', path: '/planets' },
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
                className="menu__link"
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