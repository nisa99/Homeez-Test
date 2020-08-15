
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import App from "./App";
import DisplayData from "./DisplayData";

import history from './History';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/DisplayData" exact component={DisplayData} />
                </Switch>
            </Router>
        )
    }
}
