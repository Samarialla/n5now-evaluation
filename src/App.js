import React, { Suspense } from 'react';
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import HarryPotterApp from './components/HarryPotterApp';
import RickyAndMortyApp from './components/RickyAndMortyApp';
import Headers from './components/Header';
import "./i18n/i18n";
const history = createBrowserHistory();

export default () => {
    return (
        <Suspense fallback="loading">
            <Router history={history}>
                <Headers/>
                <hr />
                <Switch>
                    <Route path='/harry-potter' component={HarryPotterApp} />
                    <Route path='/ricky-morty' component={RickyAndMortyApp} />
                </Switch>
            </Router>
        </Suspense>
    )
}