import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import * as services from '../models/services';
import * as globals from '../models/globals';
import { CartTypes } from '../models/cart-type';
import { SecurityContext } from '../routers/seurity-context';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            token: "",
            isInvalid: false
        }
    }

    componentDidMount() {
        const { referer } = this.props.location;

        console.log("aya login referer");
        console.log(referer);
    }

    login = (ev) => {
        ev.preventDefault();

        axios({
            url: services.account + '/' + services.login,
            // url: 'https://animegination2.azurewebsites.net/api/accounts/Login',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'AnimeApiClientKey': globals.animeApiClientKey,
                'JWTToken': ''
            },
            data: {
                Username: this.state.username, 
                Password: this.state.password 
            }
        })
        .then(response => {
            this.setState({
                token: response.data.token
            })
            // console.log("aya token");
            // console.log(response.data);
            // localStorage.setItem("token", response.data.token);

            this.context.token = response.data.token;

            axios({
                url: services.userAccount,
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'AnimeApiClientKey': globals.animeApiClientKey,
                    'JWTToken': this.state.token
                }
            })
            .then(response => {
                // this.setState({
                //     account: response.data
                // })
                // localStorage.setItem("account", JSON.stringify(response.data));

                this.context.account = response.data;
                this.context.firstname = response.data.firstName;

                axios({
                    url: services.jwt + '/' + services.getClaim,
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'AnimeApiClientKey': globals.animeApiClientKey,
                        'JWTToken': ''
                    },
                    data: {
                        Token: this.state.token
                    }
                })
                .then(response => {
                    this.context.roles = response.data.roles;

                    axios({
                        url: services.orders + '/' + CartTypes.shoppingCart,
                        method: 'get',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'AnimeApiClientKey': globals.animeApiClientKey,
                            'JWTToken': this.state.token
                        }
                    })
                    .then(response => {
                        console.log("aya order");
                        console.log(response.data);
                        console.log("aya context");
                        console.log(this.context);

                        this.context.order = response.data;

                        this.props.updateOrderQuantity();
    
                        this.state.isInvalid = false;
                        this.forceUpdate();
                    })
    
                    this.state.isInvalid = false;
                    this.forceUpdate();
                })
            })
        })
        .catch( error => {
            this.state.isInvalid = true;
            console.log(error);
            this.forceUpdate();
        })

    }

    inputChange = (event) => {
        const target = event.target;
        var value = target.value;
        const name = target.name;

        this.setState( {
            [name]: value
        });

        switch (name) {
            case 'username':
                this.context.username = value;
                break;
            case 'password':
                this.context.password = value;
                break;
            default:
        }
    }

    render() {
        return (

<div className="row">
    <div className="col-sm-10 offset-sm-1">
        <h2>Sign In</h2>
        <Form onSubmit={this.login}>
            <Form.Group>
                <Form.Label>Your Animegination User Name</Form.Label>
                <Form.Control name="username" type="text" required 
                    placeholder="username" onChange={this.inputChange} />
                    {/* <input type="text" ref = { user => this.state.username = user } /> */}
            </Form.Group>
            <Form.Group>
                <Form.Label>Your Animegination Password</Form.Label>
                <Form.Control name="password" type="text"  required
                    placeholder="password" onChange={this.inputChange} />
                    {/* <input type="text" ref = { pw => this.state.password = pw } /> */}
            </Form.Group>

            <span className="image-btn">
                <Button type="submit" className="btn transparent">
                    <img alt="Sign In" height={50} 
                    src="https://reydavid.blob.core.windows.net/assets/login.png" />
                </Button>
            </span>

            <p className="pt-2 anime-color">New to Animegination?  <Link to="/register">Create an account</Link></p>
            {
                this.state.isInvalid &&
                <div className="alert alert-danger">
                    <strong>There was a problem: </strong> Incorrect user name or password.  
                    Please correct your user name and password.
                </div>
            }
        </Form>
    </div>
</div>

        )
    }
}
Login.contextType = SecurityContext;

export default Login;

// var AddTicket = React.createClass({ 
//     handleSubmitEvent: function (event) { 
//         event.preventDefault(); 
//         console.log("Email--" + this.refs.email.value.trim()); 
//         console.log("Issue Type--" + this.refs.issueType.value.trim()); 
//         console.log("Department--" + this.refs.department.value.trim()); 
//         console.log("Comments--" + this.refs.comment.value.trim()); 
//     }, 
//     render...
