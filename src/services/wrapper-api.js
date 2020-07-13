import React, { Component } from 'react';
import axios from 'axios';
import * as globals from '../models/globals';

class WrapperApi extends Component {
    state = {
        isLoading: true,
        isFound: false,
        error: null,
        data: []
    };

    getData() {
        axios({
            url: this.props.url,
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'AnimeApiClientKey': globals.animeApiClientKey,
                'JWTToken': this.props.token
            }}
        )
        .then(response => {
            // console.log(response.data);
            if (response.data.length > 0) {
                this.setState({
                    isFound: true
                })
            }
            this.setState({
                data: response.data, 
                isLoading: false
            })
        })
        .catch( error => {
            console.log(error);
            this.setState({
                error: error,
                isLoading: false
            })
        })
    }

    componentDidMount() {
        this.setState(
            { 
                isLoading: true,
                isFound: false,
                error: null,
                data: []
            },
            this.getData
        )
    }

    render() {
        return this.props.render(this.state);
    }
}

export default WrapperApi
