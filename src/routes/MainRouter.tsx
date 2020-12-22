import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Users from "./Users";
import Students from './Students';
import Login from './Login';
import SignUp from './SignUp';
import { getTokenInfo } from '../services/tokenStorage';

const MainRouter = () => {
    const hasToken = getTokenInfo();
    const getRouting = () => {
        if (!hasToken) {
            return (<Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Redirect path="/" to="/login" />
                </Switch>
            )
        }
        else {
            return (<Switch>
                    <Route path="/users" component={Users} />
                    <Route path="/students" component={Students} />
                    <Redirect path="/" to="/users" />
                </Switch>
            )
        }
    }
    return getRouting()
};

export default MainRouter;