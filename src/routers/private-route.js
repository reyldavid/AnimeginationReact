import React, { Component, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { SecurityContext, SecurityProvider } from './seurity-context';

// const context = useContext(SecurityContext);

// const isAdmin = () => {
//     console.log("aya privates");
//     console.log(window.location);

//     let roles = localStorage.getItem("roles");
//     if (roles && roles.includes("Admin")) {
//         return true;
//     }
//     return false;
// }

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <SecurityContext.Consumer>
        { context => ( 
            <Route {...rest} render={ props => (
                context.roles && context.roles.includes("Admin") ? 
                    <Component {...props} /> :
                    <Redirect to = {{ 
                        pathname: '/login', 
                        state: { 
                            referer: window.location.pathname 
                        }}} />
                )}
            />
        )}
    </SecurityContext.Consumer>
)
