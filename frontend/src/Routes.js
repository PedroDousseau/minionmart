import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product/Product";
import Signup from "./pages/Signup/Signup";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/signup">
                <Signup />
            </Route>
            <Route exact path="/product/:name">
                <Product />
            </Route>
            <Route exact path="/cart">
                <Cart />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}