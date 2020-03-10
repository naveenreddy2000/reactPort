import React, { Component } from 'react';
import {  Link } from "react-router-dom";

export class navbar extends Component {
  cv = () =>{
    window.open('http://cricbuzz.com','_blank');
  }
    render() {
        return (
            <div id="nav">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <button type="button" className="btn btn-outline-success" onClick={this.cv}>RESUME</button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-dark navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto" >
                  <li className="nav-item">
                  <Link className="btn btn-dark" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="btn btn-dark" to="/skills">Skills</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="btn btn-dark" to="/projects">Projects</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="btn btn-dark" to="/contact">Contact</Link>
                  </li>    
                </ul>
              </div>
            </nav>
            </div>
        );
    }
}

export default navbar;
