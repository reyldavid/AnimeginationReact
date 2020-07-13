import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as globals from '../models/globals';
import * as services from '../models/services';

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        }
    }

    componentDidMount() {

        axios({
            url: services.category,
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
                categories: response.data
            })
        })
        .catch( error => {
            console.log(error);
        })

    }

    render() {
        let classnameBgc = "";

        if (this.props.bgc == true) {
            classnameBgc += "bgc-gray";
        }

        return (

<div className={classnameBgc}>
  <h2 className="child anime-orig-color">Shop by Category</h2>
  <ul className="list-inline">
      {
          this.state.categories.map((genre, i) => 
              <li key={i} className="li-child">
                <Link to = {'/category-list/:' + genre.CategoryID}>
                    <div className="card frame card-max">
                        <img className="card-img-top image-max" 
                            src={'https://reydavid.blob.core.windows.net/genres/' + genre.ImageFile}
                            alt={genre.CategoryName} />
                        <div className="card-body">
                            <div className="card-title genre-title smaller">{genre.Description}</div>
                                {/* [class.smaller]="category?.Description.length > 20">{{category?.Description}}</div> */}
                        </div>
                    </div>
                </Link>

              </li>
          )
      }
  </ul>
</div>

        )
    }
}

export default Categories;