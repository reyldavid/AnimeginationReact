import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WrapperApi from '../services/wrapper-api';

class SignIn extends Component {
    constructor(props) {
        super(props);
    }

    login = () => {
        console.log("login");
    }

    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("order");
        console.log("logout");
    }

    render() {
        return (
            <WrapperApi 
                url = {this.props.url} 
                render = {({ isLoading, isFound, error, data }) => (

                <ul className="navbar-nav">
                    { isFound ? (
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" 
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                Hello, <span className="anime-color">{data.userFirstName}</span>
                                <span className="caret"></span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                <a className="dropdown-item hand" onClick={this.logout}>Sign Out</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#" routerLink="/orders-list">Your Orders</a>
                                <a className="dropdown-item" href="#" routerLink="/account">Your Account</a>
                            </div>
                        </li>
                    ) : ( 
                        <li className="nav-item">
                            <Link to = "/login" className="nav-link hand" onClick={this.login}>Sign in</Link>
                        </li>
                    )}
                  </ul>
                )}
            />
        )
    }
}

export default SignIn;