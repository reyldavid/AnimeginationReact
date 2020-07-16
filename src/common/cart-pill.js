import React, { Component } from 'react';
import { SecurityContext } from '../routers/seurity-context';
import { Link } from 'react-router-dom';

class CartPill extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 0
        }
    }

    componentDidMount() {
        if (this.context && this.context.order) {
            this.setState({
                quantity: this.context.order.itemQuantity
            })
        }
    }

    render() {
        return (

        <div className="nav navbar-nav pl-3">
            <Link to="/cart">
                {/* <a className="image-link"> */}
                    <img src="https://reydavid.blob.core.windows.net/assets/menu-cart.png"
                            alt="Shopping Cart" height="46" />
                    {/* <span className="badge badge-pill badge-anime">{{ order?.itemQuantity }}</span> */}
                    <span className="badge badge-pill badge-anime">{this.context.order.itemQuantity}</span>
                {/* </a> */}
            </Link>
        </div>

        )
    }
}

CartPill.contextType = SecurityContext;

export default CartPill;