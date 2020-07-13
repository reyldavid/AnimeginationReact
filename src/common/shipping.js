import React, { Component } from 'react';
import '../styles/shipping.css';

class Shipping extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

<div className="row shipping">
  <div className="col-md-6">
    <p>
        Free US Economy Shipping at $49
      </p>
  </div>
  <div className="col-md-6">
    <p>
        Free Canadian Shipping at $249
      </p>
  </div>
</div>             
        )
    }
}

export default Shipping;