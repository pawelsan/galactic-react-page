import React from 'react';
import { Route } from 'react-router-dom';
import header1 from '../images/galaxy_1280.jpg';
import header2 from '../images/murky.jpg';
import '../styles/Header.scss'

const Header = () => {
    // const images = [header1, header2];
    // const index = Math.floor(Math.random() * 2)
    // const header = images[index]
    return (
        <>
            {/* <Route path="/" exact render={() => (<img className="app-header__image" src={header1} alt="galaxy far far away" />)} />
            <Route path="/about" exact render={() => (<img className="app-header__image" src={header2} alt="galaxy far far away" />)} />
            <Route path="/planets" exact render={() => (<img className="app-header__image" src={header1} alt="galaxy far far away" />)} />
            <Route path="/contact" exact render={() => (<img className="app-header__image" src={header2} alt="galaxy far far away" />)} /> */}
            {/* <img className="app-header__image" src={header} alt="galaxy far far away" /> */}
        </>
    );
}

export default Header;