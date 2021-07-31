import React from "react";
import { NavLink } from "react-router-dom";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";

const Footer = () => {
  return (
    <footer className="bg-color4 text-color2 mt-auto pt-1">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <ul className="nav ">
                <li className="nav-item">
                  <a
                    href="https://www.linkedin.com/in/pawe%C5%82-hi%C5%84cza-105926103/"
                    className="text-color2 nav-link"
                  >
                    <i className="fab fa-linkedin-in fa-2x"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://github.com/pawelsan"
                    className="text-color2 nav-link"
                  >
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <br />
            <div className="row d-flex flex-grow-1 justify-content-center">
              <p className="d-block">&copy; Paweł Hińcza 2019</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row justify-content-end">
              <NavLink
                to="/about"
                exact
                className="text-color2"
                activeClassName="active"
              >
                About
              </NavLink>
            </div>
            <div className="row justify-content-end">
              <NavLink
                to="/disclaimer"
                exact
                className="text-color2"
                activeClassName="active"
              >
                Disclaimer
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
