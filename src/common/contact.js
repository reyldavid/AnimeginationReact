import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactUs extends Component {
    constructor(props) {
        super(props);
    }

    newNote = () => {
        console.log("new note");
    }

    shopping = () => {
        console.log("shopping");
    }

    login = () => {
        console.log("login");
    }

    render() {
        return (

<div>
    <h2 className="pb-3">Contact Us</h2>

    <div className="font-em-10">
    <div className="col-12 col-lg-10 offset-lg-1">
        <p>
            Our offices are open Monday through Friday 8:00am to 5:00pm Pacific Standard Time. 
            Of course, you can browse and order through our 
            <Link to="/category" onClick={this.shopping}> online store </Link>
            24 hours a day, 7 days a week.
        </p>
        <p>
            If you have a concern about an order or item in your order, or if you need to request 
            a return authorization number, we have an 
            <Link to="/user-note" onClick={this.newNote}> online form </Link>
            that you may use for your request. 
            If you do not have an account, please create a new account with us through the Sign Up or Registration page.  
            User accounts allow us to better serve you. 
            If you have another type of question, would like more information on an order you have placed 
            or would like to offer feedback or say thanks - please use the 
            <Link to="/user-note" onClick={this.newNote}> contact form </Link>
            We try to answer all questions received within 48 hours excluding weekends and holidays.
        </p>
        <p>
            You will need to be logged in to use the online form. If you are already logged in, 
            you may proceed to the 
            <Link to="/user-note" onClick={this.newNote}> contact form </Link>.  Otherwise, you may 
            <Link to = {{
                    pathname: "/login",
                    state: {
                        referer: window.location.pathname
                    }
                }} 
                onClick={this.login}> log in here </Link>.

        </p>
        <p>
        We can also be reached through the following methods:
        </p>
        <h5 className="bold">Phone</h5>
        <p>
        <span className="pl-4">Customer Service: (925)915-0230</span>
        </p>
        <h5 className="bold">Email</h5>
        <p>
        <span className="pl-4">Support: <a href="mailto:techSupport@animegination.net">
            techSupport@animegination.net</a><br/></span> 
        <span className="pl-4">Marketing: <a href="mailto:marketing@animegination.net">
            marketing@animegination.net</a><br/></span> 
        <span className="pl-4">General: <a href="mailto:info@animegination.net">
            info@animegination.net</a><br/></span> 
        </p>

        <h5 className="bold">Snail Mail</h5>
        <p>
        <span className="pl-4">60 Windsor Court<br/></span>
        <span className="pl-4">Danville, CA 94506</span>
        </p>
    </div>
    </div>
</div>

        )
    }

}

export default ContactUs;