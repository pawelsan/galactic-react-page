import React from 'react';
import { NavLink } from 'react-router-dom';
import ContactForm from '../components/ContactForm.js';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
    return (
        <footer className="bg-color4 text-color2 py-4 mt-4 ">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                            <ul className="nav py-5">
                                <li className="nav-item">
                                    <a
                                        href='https://www.linkedin.com/in/pawe%C5%82-hi%C5%84cza-105926103/'
                                        className="text-color2 nav-link">
                                        <i class="fab fa-linkedin-in fa-2x"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href='https://github.com/pawelsan'
                                        className="text-color2 nav-link">
                                        <i class="fab fa-github fa-2x"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="row ml-1">
                            <NavLink
                                to='/about'
                                exact='true'
                                className="text-color2"
                                activeClassName="active" >
                                About
                        </NavLink>
                        </div>
                        <div className="row ml-1">
                            <NavLink
                                to='/disclaimer'
                                exact='true'
                                className="text-color2"
                                activeClassName="active" >
                                Disclaimer
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <ContactForm />
                        </div>
                    </div>
                    <div className="row d-flex flex-grow-1 justify-content-center">
                        <p className="d-block">
                            &copy; Paweł Hińcza 2019
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;