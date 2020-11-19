import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Users from "./Users";
import Students from './Students';

const MainRouter = () => {
    return (
        <Switch>
            <Route path="/users" component={Users} />
            <Route path="/students" component={Students} />
            <Redirect path="/" to="/users" />
        </Switch>
    );
};

export default MainRouter;