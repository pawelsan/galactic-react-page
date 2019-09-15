import React from 'react';
import { Link } from 'react-router-dom'
// import { Route } from 'react-router-dom';
// import logo from '../images/logo.png'
// import header1 from '../images/swamp.jpg';
// import header2 from '../images/murky.jpg';
// import header3 from '../images/cityscape.jpg';
// import header4 from "../images/volcano.jpg"
import '../styles/galaxy.scss'

const Jumbotron = () => {
    // const images = [header1, header2];
    // const index = Math.floor(Math.random() * 2)
    // const header = images[index]

    return (
        <>
            <div className="jumbotron jumbotron-fluid galaxy-container">
                <div className="container">
                    <div className="galaxy-bg"></div>
                    <h1 className="display-4">Welcome to the Galactic Archives</h1>
                    <blockquote className="blockquote"><p className="font-italic">"If an item does not appear in our records, it does not exist!"</p>
                        <footer className="blockquote-footer text-color2">Jocasta Nu, "Star Wars: Episode II"</footer> </blockquote>
                    <Link to="/planets" className="btn btn-color1 text-color4">Enter the Archives</Link>
                </div>
            </div>
            {/* <div className="logo"><img src={logo} alt="logo" className="logo__image" /></div>
            <div className="app-header-item"><img src={header1} alt="" className="app-header-item__image" /></div>
            <div className="app-header-item"><img src={header2} alt="" className="app-header-item__image" /></div>
            <div className="app-header-item"><img src={header3} alt="" className="app-header-item__image" /></div> */}
            {/* <div className="app-header-item"><img src={header4} alt="" className="app-header-item__image" /></div> */}
            {/* <Route path="/" exact render={() => (<img className="app-header__image" src={header1} alt="galaxy far far away" />)} />
            <Route path="/about" exact render={() => (<img className="app-header__image" src={header2} alt="galaxy far far away" />)} />
            <Route path="/planets" exact render={() => (<img className="app-header__image" src={header1} alt="galaxy far far away" />)} />
            <Route path="/contact" exact render={() => (<img className="app-header__image" src={header2} alt="galaxy far far away" />)} /> */}
            {/* <img className="app-header__image" src={header} alt="galaxy far far away" /> */}
        </>
    );
}

export default Jumbotron;