import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as listTypes from '../models/listing-type';

class FooterMain extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

//   <app-history></app-history>

  <div className="d-none d-sm-block">
    <div className="row footermain">
      <div className="col footerwrap">
          <div className="footercontent">
            <p className="p2">
              My Account
            </p>
            <p className="p3">
                <Link to="/login">Log In</Link>
            </p>
            <p className="p3">
              <Link to="/register">Sign Up</Link>
            </p>
            <p className="p3">
              <Link to="/account">Account Settings</Link>
            </p>
            <p className="p3">
              <Link to="/orders-list">Order History</Link>
            </p>
            <p className="p3">
              <Link to="/cart">Shopping Cart</Link>
            </p>
          </div>
      </div>
      <div className="col footerwrap">
          <div className="footercontent">
            <p className="p2">
              Customer Care
            </p>
            <p className="p3">
              <Link to="/contact">Contact</Link> and <Link to="/about">About</Link>
            </p>
            <p className="p3">
              <Link to="/shipping-info">Shipping</Link> and <Link to="/returns">Returns</Link>
            </p>
            <p className="p3">
              <Link to="/user-note">Customer Feedback</Link>
            </p>
            <p className="p3">
              <Link to="/privacy">Privacy</Link> and <Link to="/terms-of-use">Terms</Link>
            </p>
            <p className="p3">
              <Link to="/news">Recent News</Link>
            </p>
          </div>
      </div>
      <div className="col footerwrap">
        <div className="footercontent">
          <p className="p2">
            Popular Shopping
          </p>
          <p className="p3">
            <Link to={'/list/' + listTypes.TopSellers}>
              Top Sellers
            </Link>
          </p>
          <p className="p3">
          <Link to={'/list/' + listTypes.BargainBin}>
              Bargain Bin
            </Link>
          </p>
          <p className="p3">
          <Link to={'/list/' + listTypes.NewItems}>
              New Items
            </Link>
          </p>
          <p className="p3">
          <Link to={'/list/' + listTypes.LiveAction}>
              Live Action
            </Link>
          </p>
          <p className="p3">
          <Link to={'/list/' + listTypes.CloseOut}>
              Close Out
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>

        )
    }
}

export default FooterMain;