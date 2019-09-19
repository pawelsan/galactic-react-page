import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/galaxy.scss'

const Jumbotron = () => {

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
        </>
    );
}

export default Jumbotron;