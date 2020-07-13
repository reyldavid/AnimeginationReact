import React, { Component } from 'react';
import { NavLink, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/product-slice.css';
import * as globals from '../models/globals';
import * as services from '../models/services';
import axios from 'axios';

class ProductsSlice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listType: {},
            apiProducts: []
        }
    }

    OnSelectProduct = (prod) => {
        console.log("Aya Prod");
        console.log(prod);
    }

    componentDidMount() {

        // console.log("MEGUMI");
        // console.log(this.props);

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
            this.setState({
                apiProducts: response.data.slice(0, 1)
            })
        })
        .catch( error => {
            console.log(error);
        })
    }

    render() {
        // console.log("AYA");
        // console.log(this.state.listType);
        // console.log(this.state.apiProducts);

        return (

<div className="wrapper">
    <h2>{this.state.listType.Description}</h2>

    {
        this.state.apiProducts.map((prod, i) =>
            <div className="row flex-row" key={i}>
                <div className="col-1"></div>
                <div className="col-5 details">
                    <div>
                        <p className="hyperlink"><a onClick={this.OnSelectProduct}>{prod.ProductTitle}</a></p>

                        <p>Publisher: {prod.PublisherName}</p>

                        <p>Genre: {prod.CategoryName} </p>

                        <p>Age Rating: {prod.ProductAgeRating} </p>

                        <p>List Price: <s>${prod.UnitPrice.toFixed(2)}</s></p>
                        <p>Your Price: <strong><span className="text-danger">{prod.YourPrice.toFixed(2)} </span></strong></p>

                        <img src={'https://reydavid.blob.core.windows.net/assets/Rating ' + prod.RatingID + ' Stars.png'} 
                            alt='{prod.RatingID} stars' className="rating-max" />
                    </div>
                </div>

                <div className="col-5">
                    <a onClick={this.OnSelectProduct} className="pointer ml-neg-1">
                        <img src={'https://reydavid.blob.core.windows.net/anime/' + prod.ProductCode + '.jpg'}
                                className="image-max slice" alt={prod.ProductCode} />
                    </a>
                </div>

            </div>
        )
    }
</div>

        )
    }
}

export default ProductsSlice;
