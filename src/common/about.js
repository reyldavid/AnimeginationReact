import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends Component {
    constructor(props) {
        super(props);
    }

    reydavid = () => {
        console.log("rey david");
    }

    render() {
        return (

<div>
    <h2 className="pb-3">About Animegination</h2>

    <div className="font-em-10">
    <div className="col-12 col-lg-10 offset-lg-1">
        <p>
            Animegination is a demo website written by 
            <Link to="/reydavid" onClick={this.reydavid}> Rey David </Link>
            to apply new learned technologies. 
            The website is an online retail site that specializes in Japanese animation (Anime) 
            titles and American live-action titles. The entire product inventory in the website 
            represents Rey's own private collection of entertainment media. 
            Every item found in the website exists in Rey's own library, and is not for sale. 
        </p>
        <h4 className="bold">History of Animation</h4>
        <p>
            The Animegination website is a Node.js application written in Angular 6, 
            Typescript and Bootstrap. The REST APIs run as an Azure App, 
            the backend database resides in Azure SQL Server, 
            and other services are hosted in Microsoft Azure. 
            In years past, <Link to="/reydavid" onClick={this.reydavid}> Rey David </Link>
            has built earlier versions of the Animegination website 
            using the latest Microsoft technologies of the time. 
            The first version was written in 2002 using Microsoft ASP.NET 2.0 technology. 
            In 2005, the website was upgraded with Silverlight technology. In 2008, 
            the website was replaced with Microsoft ASP.NET 3.5 technology. In 2012, 
            the website was rewritten with ASP.NET MVC 4 technology.  And in 2019, 
            it was repaced yet again with Angular 6, Typescript and Azure technologies. 
        </p>
        <h4 className="bold">Future of Animegination</h4>
        <p>
            In December 2019, <Link to="/reydavid" onClick={this.reydavid}> Rey David </Link>
            published a Hybrid Mobile App version of Animegination.  
            Using essentially the same code base as the website (write once deploy everywhere), 
            he deployed the mobile app in both the Android and the iOS operating systems. 
            The Animegination mobile app is now available to download for free in both 
            the Google Play Store (for Android phones) and the Apple App Store (for iOS phones).  
            Just search for the app named ANIMEGINATION.
        </p>
        <p> 
            In February 2013, Rey David  
            also published a Windows 8 Application version of Animegination.  
            The Windows 8 App may be downloaded for free from the Microsoft Store.  
            For as long as web media and mobile media technologies evolve, 
            Animegination will continue to evolve with it. 
            <Link to="/reydavid" onClick={this.reydavid}> Rey David </Link>
            will make sure of that. 
            We look forward to the future, and the exciting new technologies that it will bring.
        </p>
        <h4 className="bold">Disclaimer</h4>
        <p>
            We remind you that this is only a Demo website. 
            None of the items in the website is actually available for purchase. 
            We do not use the user information for any purpose other than demonstration. 
            Nevertheless, when entering user information, please do not enter any sensitive data.
        </p>
        <div className="pb-3"></div>
    </div>
    </div>
</div>
        )
    }
}

export default AboutUs;