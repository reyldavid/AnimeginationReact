import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAdmin = () => {
    let user = localStorage.getItem("user");
    if (user && user.isAdmin) {
        return true;
    }
    return false;
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ props => (
        isAdmin() ? 
            <Component {...props} /> :
            <Redirect to = {{ pathname: '/login', state: { referer: props.location }}} />
    )}
    />
)
