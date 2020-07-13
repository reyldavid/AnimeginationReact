import React, { Component } from 'react';
import axios from 'axios';
import * as globals from '../models/globals';
import * as services from '../models/services';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 0,
            loaded: false,
            product: {
                unitPrice: 0,
                yourPrice: 0
            }
        }
    }

    updateQuantity = (ev) => {
        console.log("update quantity");
        console.log(ev.target.value);
    }

    AddToCart = () => {
        console.log("add to cart");
    }

    WriteReview = () => {
        console.log("write review");
    }

    componentDidMount() {

        console.log("Aya product mount props");
        // console.log(this.props.match);

        axios({
            url: services.product + '/' + this.props.match.params.productID.replace(':', ''),
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'AnimeApiClientKey': globals.animeApiClientKey,
                'JWTToken': ''
            }}
        )
        .then(response => {
            this.setState({
                product: response.data[0]
            })
        })
        .catch( error => {
            console.log(error);
        })
        
    }

    render() {
        // console.log("Aya product render");
        // console.log(this.state.product);

        return (

            <div className="row">
                    <div className="child col-12 col-md-6 col-lg-5 offset-lg-1">
                    <div className="panel-body panel-default">
                        <img src={'https://reydavid.blob.core.windows.net/anime/' + this.state.product.productCode +'.jpg'}
                             alt={this.state.product.productCode} className="image-feature img-responsive" />
                    </div>
                </div>
                <div className="child col-12 col-md-6 col-lg-6 pl-3">
                    <h3>{this.state.product.productTitle}</h3>
                    <img src={'https://reydavid.blob.core.windows.net/assets/Rating ' + this.state.product.ratingID + ' Stars.png'}
                         alt={this.state.product.ratingID + ' stars'} className="img-responsive" />
                    <div className="pt-3"></div>
                    <table>
                        <tbody>
                            <tr>
                                <td>List Price: </td>
                                <td><s>${this.state.product.unitPrice.toFixed(2)} </s></td>
                            </tr>
                            <tr>
                                <td><strong>Your Price: </strong></td>
                                <td><strong><span className="text-danger font-em-10">${this.state.product.yourPrice.toFixed(2)} </span></strong></td>
                            </tr>
                            <tr>
                                <td>You Save: </td>
                                <td><span className="text-danger">${ (this.state.product.unitPrice - this.state.product.yourPrice).toFixed(2) } </span></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="pt-3">
                        <div className="fine-print alert-content">In Stock</div>
            
                        <div>Quantity: 
                            <input type='number' min={1} max={10} step={1} 
                                // value={this.state.quantity} 
                                defaultValue={1}
                                onChange={this.updateQuantity} 
                            />
                        </div>
            
                        <button className="btn btn-default bgc-light" onClick={this.AddToCart}>
                            <img src={'https://reydavid.blob.core.windows.net/assets/shopping-cart.png'}
                                    alt="Buy in website now" style={{maxWidth: 130 + 'px'}} />
                        </button>
                        <div className="fine-print pt-3">Free US Economy Shipping at $49</div>
                        <div className="fine-print">Free Canadian Shipping at $249</div>
                        <div className="tiny-gray">Item: {this.state.product.productCode}</div>
                    </div>
                    <div className="pt-3">
                        <div className="pb-2">Share your thoughts on this item with other customers</div>
                        <div>
                            <button type="button" className="btn btn-default btn-outline-anime bold" 
                                onClick={this.WriteReview}>Write a Review</button>
                        </div>                    
                    </div>
                </div>
                <div className="child col-12 col-md-6">
                    <div className="col-md-10 offset-md-1 description">
                        <h4>Description</h4>
                        <p>
                            {this.state.product.productDescription}
                        </p>
                    </div>
                </div>
                <div className="child col-12 col-md-6">
                    <div className="col-md-10">
                        <h4>Product Details</h4>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td className="bg-lightgray">Rated: </td>
                                    <td>{this.state.product.productAgeRating}</td>
                                </tr>
                                <tr>
                                    <td className="bg-lightgray">Run Time: </td>
                                    <td>{this.state.product.productLength} minutes</td>
                                </tr>
                                <tr>
                                    <td className="bg-lightgray">Format: </td>
                                    <td>{this.state.product.mediumName}</td>
                                </tr>
                                <tr>
                                    <td className="bg-lightgray">Category: </td>
                                    <td>{this.state.product.categoryName}</td>
                                </tr>
                                <tr>
                                    <td className="bg-lightgray">Released: </td>
                                    <td>{this.state.product.productYearCreated}</td>
                                </tr>
                                <tr>
                                    <td className="bg-lightgray">Publisher: </td>
                                    <td>{this.state.product.publisherName}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            // <div *ngIf="product.ProductCode == undefined">
            //     <h3>Product could {this.state.product.ProductTitle} not be found</h3>
            //     <div className="pb-2"></div>
            // </div>
            
            // <app-similars [productID]="productID"></app-similars>
            
            // <app-footer-product></app-footer-product>            
        )
    }
}

export default Product;
