import React, { Component } from 'react';
import './css/contact.css'

export class contact extends Component {
    render() {
        
        return (
                <div id="contact">
                <div className="container">
                <div className="row">
                <div className="col-sm-3">
                    <img id="img" src={require('../img/naveen.png')} alt="Naveen Reddy"  />
                </div>
                <div className="col-sm-9">
                <br/>
                <h1 id = "name">Naveen Reddy</h1>
                <p className="title">2nd year UG student</p>
                <p id="nit">NIT Durgapur</p>
                <div id="icons">
                    <a href={`https://github.com/naveenreddy2000`}><i className="fa fa-google">&nbsp;&nbsp;&nbsp;&nbsp;</i></a>
                    <a href={`https://github.com/naveenreddy2000`}><i className="fa fa-linkedin">&nbsp;&nbsp;&nbsp;&nbsp;</i></a> 
                    <a href={`https://github.com/naveenreddy2000`}><i className="fa fa-github">&nbsp;&nbsp;&nbsp;&nbsp;</i></a> 
                    <a href={`https://github.com/naveenreddy2000`}><i className="fa fa-facebook">&nbsp;&nbsp;&nbsp;&nbsp;</i></a>   
                </div>
                </div>
                </div>
                </div>
                </div>
        );
    }
}

export default contact;
