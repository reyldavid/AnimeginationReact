import React, { Component } from 'react';
import '../styles/carousel.css';

class CardsCarousel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

<div className="container">
    <div className="row wider">
        <div id="carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carousel" data-slide-to={0} className="active"></li>
            <li data-target="#carousel" data-slide-to={1}></li>
            <li data-target="#carousel" data-slide-to={2}></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <div className="d-none d-lg-block">
                <div className="slide-box">
                    <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto12.jpg"
                        alt="Haruhi Suzumiya" height={220 + 'px'} className="pr-2" />
                    <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto17.jpg"
                        alt="K-ON" height={220 + 'px'} className="pr-2" />
                    <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto22.jpg"
                        alt="Avengers" height={220 + 'px'} className="pr-2" />
                    <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto24.jpg"
                        alt="Namae" height={220 + 'px'} />
                </div>
            </div>
            <div className="d-none d-md-block d-lg-none">
                <div className="slide-box">
                    <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto12.jpg"
                        alt="Haruhi Suzumiya" height={220 + 'px'} className="pr-2" />
                    <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto17.jpg"
                        alt="K-ON" height={220 + 'px'} className="pr-2" />
                    <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto22.jpg"
                        alt="Avengers" height={220 + 'px'} />
                </div>
            </div>
            <div className="d-none d-sm-block d-md-none">
                <div className="slide-box">
                    <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto12.jpg"
                        alt="Haruhi Suzumiya" height={220 + 'px'} className="pr-2" />
                    <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto17.jpg"
                        alt="K-ON" height={220 + 'px'} />
                </div>
            </div>
            <div className="d-block d-sm-none">
                <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto12.jpg"
                    alt="Haruhi Suzumiya" className="d-block w-100" />
            </div>
            </div>

            <div className="carousel-item">
            <div className="d-none d-lg-block">
                <div className="slide-box">
                    <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto27.jpg"
                        alt="Miku Hatsune" height={220 + 'px'} className="pr-2" />
                    <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto15.png"
                        alt="K-ON" height={220 + 'px'} className="pr-2" />
                    <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto11.png"
                        alt="Cosplay" height={220 + 'px'} className="pr-2" />
                    <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto20.jpg"
                        alt="Love Hina" height={220 + 'px'} />
                </div>
            </div>
            <div className="d-none d-md-block d-lg-none">
                <div className="slide-box">
                <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto24.jpg"
                    alt="Namae" height={220 + 'px'} className="pr-2" />
                <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto27.jpg"
                    alt="Miku Hatsune" height={220 + 'px'} className="pr-2" />
                <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto15.png"
                    alt="K-ON" height={220 + 'px'} />
            </div>
            </div>
            <div className="d-none d-sm-block d-md-none">
                <div className="slide-box">
                <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto22.jpg"
                    alt="Avengers" height={220 + 'px'} className="pr-2" />
                <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto24.jpg"
                    alt="Namae" height={220 + 'px'} />
                </div>
            </div>
            <div className="d-block d-sm-none">
                <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto17.jpg"
                alt="K-ON" className="d-block w-100" />
            </div>
            </div>

            <div className="carousel-item">
            <div className="d-none d-lg-block">
                <div className="slide-box">
                    <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto22.jpg"
                        alt="Avengers" height={220 + 'px'} className="pr-2" />
                    <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto24.jpg"
                        alt="Namae" height={220 + 'px'} className="pr-2" />
                    <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto27.jpg"
                        alt="Miku Hatsune" height={220 + 'px'} className="pr-2" />
                    <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto15.png"
                        alt="K-ON" height={220 + 'px'} />
                </div>
            </div>
            <div className="d-none d-md-block d-lg-none">
                <div className="slide-box">
                    <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto11.png"
                    alt="Cosplay" height={220 + 'px'} className="pr-2" />
                <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto20.jpg"
                    alt="Love Hina" height={220 + 'px'} className="pr-2" />
                <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto12.jpg"
                    alt="Haruhi Suzumiya" height={220 + 'px'} />
                </div>
            </div>
            <div className="d-none d-sm-block d-md-none">
                <div className="slide-box">
                <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto27.jpg"
                    alt="Miku Hatsune" height={220 + 'px'} className="pr-2" />
                <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto15.png"
                    alt="K-ON" height={220 + 'px'} />
                </div>
            </div>
            <div className="d-block d-sm-none">
                <img src="https://reydavid.blob.core.windows.net/assets/WallPhoto24.jpg"
                    alt="Namae" className="d-block w-100" />
            </div>
        </div>
        </div>
        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
    </div>
</div>

        )
    }
}

export default CardsCarousel;