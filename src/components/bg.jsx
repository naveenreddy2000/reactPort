import React, { Component } from 'react';
import './css/bg.css'

export class bg extends Component {
    render() {
        return (
            <div>
            <div id="my-background" className="background">
                <div id = "stars"/>
                <div id="stars2"/>
            </div>
            </div>
        );
    }
}

export default bg;
