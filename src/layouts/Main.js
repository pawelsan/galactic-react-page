import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home.js';
import About from '../pages/About.js';
import ArchivesPage from '../pages/ArchivesPage.js';
import Disclaimer from '../pages/Disclaimer.js'
import ErrorPage from '../pages/Error.js'
import PlanetPage from '../pages/PlanetPage.js';



const Main = ({ planets, loading, error }) => {

    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (
                    <Home
                        planets={planets}
                        loading={loading}
                        error={error} />
                )}
                />
                <Route path="/about" component={About} />
                <Route path="/planets" render={() => (
                    <ArchivesPage
                        planets={planets}
                        loading={loading}
                        error={error}
                    />
                )}
                />
                <Route path="/planet/:id" component={PlanetPage} />
                <Route path="/disclaimer" component={Disclaimer} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Main;