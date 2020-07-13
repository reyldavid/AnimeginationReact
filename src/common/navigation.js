import React, { Component } from 'react';
import '../styles/styles.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// Router, IndexRoute, browserHistory, userRouterHistory
import { NavBar, Nav, NavDropdown, NavLink, Dropdown, DropdownButton, Navbar } from 'react-bootstrap';
import App from '../App';
import Features from './features';
import ContactUs from './contact';
import AboutUs from './about';
import Admin from './admin';
import Home from './home';
import Product from './product';
import Categories from './categories';
import FooterMain from './footer-main';
import Login from './login';
import CustomerNote from '../admin/customer-note';
import Genre from '../admin/genre';
import Listing from '../admin/listing';
import ListingType from '../admin/list-type';
import Medium from '../admin/medium';
import ProductInfo from '../admin/product-info';
import Publisher from '../admin/publisher';
import Recommendation from '../admin/recommendation';
import UserFeedback from '../admin/user-feedback';
import UserInfo from '../admin/user-info';
import SignIn from './sign-in';
import { PrivateRoute } from '../routers/private-route';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = 
            {
                order: {
                    Quantity: 0
                }
            }
    }

    render() {
        return (
<div className="body-bg-white">
    <BrowserRouter>
    <div className="row">
        <div className="col-xs-12 col-sm-4 col-lg-6">
            <Nav.Link as={Link} to="">
                <img src="https://reydavid.blob.core.windows.net/assets/Animegination-brand.PNG"
                    alt="Animegination" height="25" />
            </Nav.Link>
        </div>
        <div className="col-xs-12 col-sm-8 col-lg-6">
            <div className="input-group pt-2 px-3">
                <input type="search" className="form-control" placeholder="Search the Store" />
                    {/* #inSearch (keyup.enter)="onSearch(inSearch.value)" /> */}
                <span className="input-group-btn image-btn">
                    <button className="btn btn-default" type="button" >
                        {/* (click)="onSearch(inSearch.value)"> */}
                        <img src="https://reydavid.blob.core.windows.net/assets/Search2.png" alt="Search" height="32" />
                    </button>
                </span>
            </div>
        </div>
    </div>
    
    <div className="body-bg-white">
      <nav className="navbar navbar-expand-sm navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <NavDropdown title="Features" id="features-dropdown">
                  <NavDropdown.Item href="/slice/1">Featured Titles</NavDropdown.Item>
                  <NavDropdown.Item href="/slice/3">Top Sellers</NavDropdown.Item>
                  <NavDropdown.Item href="/slice/2">New Items</NavDropdown.Item>
                  <NavDropdown.Item href="/slice/5">Close Out</NavDropdown.Item>
                  <NavDropdown.Item href="/slice/5">Bargain Bin</NavDropdown.Item>
                  <NavDropdown.Item href="/slice/6">Live Action</NavDropdown.Item>
                  <NavDropdown.Divider></NavDropdown.Divider>
                  <NavDropdown.Item href="/news">Recent News</NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className="nav-item">
                <Nav.Link as={Link} to = "/category">
                    Shop by Category
                </Nav.Link>
            </li>
            <li className="nav-item">
                <Nav.Link as={Link} to = "/contact">
                    Contact Us
                </Nav.Link>
            </li>
            <li className="nav-item">
                <Nav.Link as={Link} to = "/about">
                    About Us
                </Nav.Link>
            </li>
            {/* <li [class.hidden]="!isAdmin" className="nav-item dropdown"> */}
            <li className="nav-item dropdown">
                <NavDropdown title="Admin" id="admin-dropdown">
                    <NavDropdown.Item href="/user-info">Users</NavDropdown.Item>
                    <NavDropdown.Item href="/genre">Genres</NavDropdown.Item>
                    <NavDropdown.Item href="/product-info">Products</NavDropdown.Item>
                    <NavDropdown.Item href="/medium">Medium</NavDropdown.Item>
                    <NavDropdown.Item href="/publisher">Publishers</NavDropdown.Item>
                    <NavDropdown.Item href="/list-type">List Types</NavDropdown.Item>
                    <NavDropdown.Item href="/listing">Listings</NavDropdown.Item>
                    <NavDropdown.Item href="/customer-note">User Notes</NavDropdown.Item>
                    <NavDropdown.Item href="/user-feedback">Feedbacks</NavDropdown.Item>
                    <NavDropdown.Item href="/recommends">Recommends</NavDropdown.Item>
                </NavDropdown>
            </li>
          </ul>
  
          {/* <ul className="navbar-nav">
            <li *ngIf="userFirstName" className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" 
                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Hello, <span className="anime-color">{{userFirstName}}</span><span className="caret"></span>
                </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <a className="dropdown-item hand" (click)="logout()">Sign Out</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#" routerLink="/orders-list">Your Orders</a>
                <a className="dropdown-item" href="#" routerLink="/account">Your Account</a>
              </div>
            </li>
            <li *ngIf="!userFirstName" className="nav-item">
              <a className="nav-link hand" [class.disabled]="loggingIn" (click)="login()">Sign in</a>
            </li>
          </ul> */}

          <SignIn />
        </div>
  
        <div className="nav navbar-nav pl-3">
            <Link to="/cart">
                {/* <a className="image-link"> */}
                    <img src="https://reydavid.blob.core.windows.net/assets/menu-cart.png"
                            alt="Shopping Cart" height="46" />
                    {/* <span className="badge badge-pill badge-anime">{{ order?.itemQuantity }}</span> */}
                    <span className="badge badge-pill badge-anime">{this.state.order.Quantity}</span>
                {/* </a> */}
            </Link>
        </div>
      </nav>  
    </div>
  
    <div className="pl-3">
          <Switch>
            <Route path = "/" component = { Home } exact />
            <Route path = "/features" component = { Features } />
            <Route path = "/category" component = { Categories } />
            <Route path = '/contact' component = { ContactUs } />
            <Route path = '/about' component = { AboutUs } />
            <Route path = '/product/:productID' component = { Product } />
            <PrivateRoute path = '/admin' component = { Admin } />
            <PrivateRoute path = '/customer-note' component = { CustomerNote } />
            <PrivateRoute path = '/genre' component = { Genre } />
            <PrivateRoute path = '/listing' component = { Listing } />
            <PrivateRoute path = '/list-type' component = { ListingType } />
            <PrivateRoute path = '/medium' component = { Medium } />
            <PrivateRoute path = '/product-info' component = { ProductInfo } />
            <PrivateRoute path = '/publisher' component = { Publisher } />
            <PrivateRoute path = '/recommends' component = { Recommendation } />
            <PrivateRoute path = '/user-feedback' component = { UserFeedback } />
            <PrivateRoute path = '/user-info' component = { UserInfo } />
            <Route path = '/login' component = { Login } />
            <Route component = { Home } />
          </Switch>
    </div>
  
    <FooterMain />
    {/* <app-spinner></app-spinner> */}
    
    </BrowserRouter>
</div>
          );
    }
}

export default Navigation;
