import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as globals from '../models/globals';
import * as services from '../models/services';

class CategoryList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            category: {},
            products: []
        }
    }

    componentDidMount() {

        let genreID = this.props.match.params.genreID ? 
            this.props.match.params.genreID.replace(':', '') : this.props.genreID;

        axios({
            url: services.category + '/' + genreID,
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'AnimeApiClientKey': globals.animeApiClientKey,
                'JWTToken': ''
            }
        })
        .then(response => {
            this.setState({
                category: response.data[0]
            })
        })
        .catch( error => {
            console.log(error);
        })

        axios({
            url: services.categoryList + '/' + genreID,
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'AnimeApiClientKey': globals.animeApiClientKey,
                'JWTToken': ''
            }
        })
        .then(response => {
            this.setState({
                products: response.data
            })
        })
        .catch( error => {
            console.log(error);
        })
    }

    render() {

        return (

<div className="bgc-gray">
  <h2 className="child"><span className="h4">Category:  </span>{this.state.category.CategoryName}</h2>

  <ul className="list-inline">
      {
          this.state.products.map((product, i) => 
            <li key={i} className="li-child">
                <Link to = {'/product/:' + product.ProductID}>
                    <div className="card frame card-max">
                        <img src={'https://reydavid.blob.core.windows.net/anime/' + product.ProductCode + '.jpg' } 
                            className="card-img-top mx-auto image-max" alt={product.ProductCode} />
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>List Price: </td>
                                <td><s>${product.UnitPrice.toFixed(2)} </s></td>
                            </tr>
                            <tr>
                                <td>Your Price: </td>
                                <td><strong><span className="text-danger">${product.YourPrice.toFixed(2)} </span></strong></td>
                            </tr>
                        </tbody>
                    </table>
                </Link> 
            </li>
          )
      }
  </ul>
</div>
        )
    }
}

export default CategoryList;
