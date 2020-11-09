import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Users from "./Users";

const MainRouter = () => {
    return (
        <Switch>
            <Redirect path="/" to="/users" />
            <Route path="/users" component={Users} />
        </Switch>
    );
};

export default MainRouter;