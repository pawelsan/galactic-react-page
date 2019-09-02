import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from '../pages/Home.js';
import About from '../pages/About.js';
import PlanetListPage from '../pages/PlanetListPage.js';
import Contact from '../pages/Contact.js';
import ErrorPage from '../pages/Error.js'
import PlanetPage from '../pages/PlanetPage.js';


const list = [
    { name: 'Home', breadcrumb: () => <h2>Home</h2>, path: '/', exact: true },
    { name: 'About', breadcrumb: () => <h2>About</h2>, path: '/about' },
    { name: 'Galactic Archives', breadcrumb: () => <h2>Galactic Archives</h2>, path: '/planets' },
    { name: 'Contact', breadcrumb: () => <h2>Contact</h2>, path: '/contact' }
]

const breadcrumbs = list.map(item => (
    <li
        key={item.name}
        className="breadcrumb-item">
        <NavLink
            to={item.path}
            exact={item.exact ? item.exact : false}
            // className="nav-link"
            activeClassName="active" >
            {item.name}
        </NavLink>
    </li>
))

const Page = () => {
    return (
        <>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        {breadcrumbs}
                    </ol>
                </nav>
            </div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/planets" component={PlanetListPage} />
                <Route path="/planet/:id" component={PlanetPage} />
                <Route path="/contact" component={Contact} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;