import React, { Component } from 'react';
import { NavLink, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/product-slide.css';
import * as globals from '../models/globals';
import * as services from '../models/services';
import axios from 'axios';
import ProductSlide from './product-slide';

class ProductsSlide extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showButtons: false,
            listType: {},
            apiProducts: []
        }
    }

    componentDidMount() {

        axios({
            url: services.listType + '/' + ( this.props.listTypeID % 10 ),
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'AnimeApiClientKey': globals.animeApiClientKey,
                'JWTToken': ''
            }}
        )
        .then(response => {
            // console.log(response.data);
            this.setState({
                listType: response.data
            })
        })
        .catch( error => {
            console.log(error);
        })

        axios({
            url: services.listings + '/' + ( this.props.listTypeID % 10 ),
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'AnimeApiClientKey': globals.animeApiClientKey,
                'JWTToken': ''
            }}
        )
        .then(response => {
            // console.log(response.data);
            if (response.data.length > 0) {
                this.setState({
                    showButtons: true
                })
            }
            this.setState({
                apiProducts: response.data
            })
        })
        .catch( error => {
            console.log(error);
        })
    }

    render() {
        let classname = '';
        if (this.props.bgc == true) {
            classname += 'bgc-gray';
        }

        return (

<div className={classname}>
    <h2>{this.state.listType.Description}
        {
            this.state.showButtons &&
            <span className="link-normal">  
                {/* <a [routerLink]="['/list']" [queryParams]="{ listTypeId: listTypeID }">See More</a> */}
                <Nav.Link as={Link} to="/list">See More</Nav.Link>
            </span>
        }
    </h2>

    {
        (this.state.showButtons) &&
        <div className="row">
            <div id="'prev' + listTypeID" className="slide-prev slide-col col-2 col-sm-1 d-flex align-items-center">
                <a>
                    <img src={'Previous2.jpg'} alt="Previous" 
                        className="slide-buttons"></img>
                </a>
            </div>

            <div id="'wrap' + listTypeID" className="slide-wrapper col-8 col-sm-10">
            <ul className="slide">
                {
                    this.state.apiProducts.map((prod, i) => 
                        <li key={i} className="slide">
                            {/* <a click={this.OnSelectProduct}> */}
                                <ProductSlide prod={prod} />
                            {/* </a> */}
                        </li>
                    )
                }
            </ul>
            </div>

            <div id="'next' + listTypeID" className="slide-next slide-col col-2 col-sm-1 d-flex align-items-center">
                <a>
                    <img src={'Next2.jpg'} alt="Next" className="slide-buttons"></img>
                </a>
            </div>
        </div>
    }

</div>
        )
    }
}

export default ProductsSlide;
