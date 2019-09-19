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
                <div className='row no-gutters p-3'>
                    <div className="col-md-4 bg-color4">
                        <div className="m-3">
                            <img src={require(`../images/foto.png`)} alt="" className="card-img-top p-1 bg-color2" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row no-gutters p-3 bg-color4 text-lg text-color2">
                            <h1 className="about__title">Hi! I'm Paweł. Welcome to my page!</h1>
                            <p className="about__lead">I have made this page in order to test and present the skills and knowledge acquired by me during one year of learning web development.</p>
                            <div className="about__main">
                                <p>It took me a while before realizing that web development is <em>the</em> field that I am passionate about and a career path that I want to follow.</p>
                                <p>For almost ten years, I have been working as an analyst, mainly in public sector, but since recently also in a multinational company.</p>
                                <p>Since last September, I have started learning the foundations of web development, devoting most of my free time to this end. I have been using a variety of sources including online courses from Udemy and Frontend Masters.</p>
                                <p>This project presents my level of knowledge so far. It is a SPA made with React (including simple Hooks) and React Router. It fetches public API using Axios. For the styling purposes, I have used Bootstrap 4, customizsed with a help of SCSS.</p>
                                <p>I hope that this website would help me in achieving my primary goal, findig my first job in web development. If not, I do hope that <em>at the very least</em> you will enjoy references to the Star Wars universe.</p>
                            </div>
                            <p className="about__footer">Please feel free to contact me using the contact form or through the social media listed below.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default About;