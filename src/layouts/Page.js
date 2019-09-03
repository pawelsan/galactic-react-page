import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home.js';
import About from '../pages/About.js';
import PlanetListPage from '../pages/PlanetListPage.js';

import ErrorPage from '../pages/Error.js'
import PlanetPage from '../pages/PlanetPage.js';



const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/planets" component={PlanetListPage} />
                <Route path="/planet/:id" component={PlanetPage} />
                {/* <Route path="/contact" component={Contact} /> */}
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;