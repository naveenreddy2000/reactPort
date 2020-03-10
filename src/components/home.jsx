import React, { Component } from 'react';
import Typical from 'react-typical'
import './css/home.css'

export class home extends Component {
    render() {
        if(!this.props.object.home) {
            return(
                <div></div>
            );
        }else
         {
            return (
                <div id="home">
                    <div className="container">
                    <img id="profilePic" src={require('../img/naveen.png')} className="rounded-circle img-fluid mx-auto d-block" alt="Cinque Terre" width="304" height="256"/> 
                    <br/> 
                    <div id = "text" width="304" height="256">
                    <Typical
                    steps={['Hello!',100, 'I am  NAVEEN REDDY', 200, 'a second year undergraduate student, NIT Durgapur', 200]}
                    loop={Infinity}
                    wrapper="p"
                    />
                    </div>
                    </div>
                </div>
            );
        }
        
    }
}

export default home;
