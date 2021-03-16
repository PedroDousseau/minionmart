import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}