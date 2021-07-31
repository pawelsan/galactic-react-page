import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home.js";
import About from "../pages/About.js";
import ArchivesPage from "../pages/ArchivesPage.js";
import Disclaimer from "../pages/Disclaimer.js";
import ErrorPage from "../pages/Error.js";
import PlanetPage from "../pages/PlanetPage.js";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/planets" component={ArchivesPage} />
        <Route path="/planet/:id" component={PlanetPage} />
        <Route path="/disclaimer" component={Disclaimer} />
        <Route component={ErrorPage} />
      </Switch>
    </main>
  );
};

export default Main;
