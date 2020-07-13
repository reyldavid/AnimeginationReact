import React, { Component } from 'react';
import * as listTypes from '../models/listing-type';
import CardsCarousel from './cards-carousel';
import Shipping from './shipping';
import ProductSlice from './products-slice';
import ProductSlide from './products-slide';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

<div>
    <div className="child">
        <CardsCarousel></CardsCarousel>
    </div>
    <div className="child">
        <Shipping></Shipping>
    </div>
    <div className="child">
        <ProductSlide listTypeID={listTypes.NewItems} bgc={true}></ProductSlide>
    </div>
    <div className="child">
        <div className="d-block d-md-none">
            <div>
                <ProductSlice listTypeID={listTypes.FeaturedTitles}></ProductSlice>
            </div>
            <div>
                <ProductSlide listTypeID={listTypes.OnSale} bgc={true}></ProductSlide>
            </div>
        </div>
        <div className="d-none d-md-block">
            <div className="d-flex align-items-center">
                <div>
                    <ProductSlice listTypeID={listTypes.FeaturedTitles}></ProductSlice>
                </div>
                <div className="fill-size">
                    <ProductSlide listTypeID={listTypes.OnSale2} bgc={true}></ProductSlide>
                </div>
            </div>
        </div>
    </div>
    <div className="child">
        <ProductSlide listTypeID={listTypes.TopSellers} bgc={false}></ProductSlide>
    </div>
    <div className="child">
        <ProductSlide listTypeID={listTypes.LiveAction} bgc={true}></ProductSlide>
    </div>
    <div className="child">
        <ProductSlide listTypeID={listTypes.CloseOut} bgc={false}></ProductSlide>
    </div>
    <div className="child">
        <ProductSlide listTypeID={listTypes.BargainBin} bgc={true}></ProductSlide>
    </div>
</div>

)
    }
}

export default Home;