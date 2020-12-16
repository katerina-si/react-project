import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Users from "./Users";
import Students from './Students';
import Login from './Login';
import SignUp from './SignUp';

const MainRouter = () => {
    return (
        <Switch>
            <Route path="/users" component={Users} />
            <Route path="/students" component={Students} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Redirect path="/" to="/users" />
        </Switch>
    );
};

export default MainRouter;