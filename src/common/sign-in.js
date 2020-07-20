import React, { Component } from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SecurityContext } from '../routers/seurity-context';
import WrapperApi from '../services/wrapper-api';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: props.firstname
        }
    }

    componentWillReceiveProps({props}) {
        // this.setState({
        //     ...this.state, props
        // })
        this.setState({
            firstName: (this.context && this.context.firstname) ? this.context.firstname : ""
        })
    }

    login = () => {
        console.log("login");
    }

    logout = () => {
        // localStorage.removeItem("user");
        // localStorage.removeItem("token");
        // localStorage.removeItem("roles");
        // localStorage.removeItem("order");
        console.log("logout");

        this.context.username = "";
        this.context.password = "";
        this.context.token = "";
        this.context.account = {};
        this.context.firstname = "";
        this.context.roles = [];
        this.context.order = {};

        this.props.resetContext();
    }

    render() {
        return (
            <WrapperApi 
                url = {this.props.url} 
                render = {({ isLoading, isFound, error, data }) => (

                <ul className="navbar-nav">
                    { this.state && this.state.firstName ? (
                        // <li className="nav-item dropdown">
                        //     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" 
                        //         role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                        //         Hello, <span className="anime-color">{this.state.firstName}</span>
                        //         <span className="caret"></span>
                        //     </a>
                        //     <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                        //         <a className="dropdown-item hand" onClick={this.logout}>Sign Out</a>
                        //         <div className="dropdown-divider"></div>
                        //         <a className="dropdown-item" href="#" routerLink="/orders-list">Your Orders</a>
                        //         <a className="dropdown-item" href="#" routerLink="/account">Your Account</a>
                        //     </div>
                        // </li>
                        <li className="nav-item dropdown">
                            <NavDropdown title={'Hello, ' + this.state.firstName} className="bold">
                                <NavDropdown.Item onClick={this.logout}>Sign Out</NavDropdown.Item>
                                <NavDropdown.Divider></NavDropdown.Divider>
                                <NavDropdown.Item as={Link} to="/orders-list">Your Orders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/account">Your Account</NavDropdown.Item>
                            </NavDropdown>
                        </li>
                    ) : ( 
                        <li className="nav-item">
                            <Link to = {{
                                pathname: "/login",
                                state: {
                                    referer: window.location.pathname
                                }
                            }} 
                                className="nav-link hand" onClick={this.login}>Sign in</Link>
                        </li>
                    )}
                  </ul>
                )}
            />
        )
    }
}

SignIn.contextType = SecurityContext;

export default SignIn;