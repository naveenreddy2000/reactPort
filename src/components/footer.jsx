import React, { Component } from 'react';
import './css/footer.css';

export class footer extends Component {
    render() {
        return (
            <div className="footer">
                <p>
                    <span  className="fa fa-copyright">&nbsp;</span>
                    konugantinaveenreddy@gmail.com &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a><i className="fa fa-google">&nbsp;&nbsp;&nbsp;&nbsp;</i></a> 
                    <a><i className="fa fa-linkedin">&nbsp;&nbsp;&nbsp;&nbsp;</i></a>  
                    <a href={`https://github.com/naveenreddy2000`}><i className="fa fa-github">&nbsp;&nbsp;&nbsp;&nbsp;</i></a> 
                    <a><i className="fa fa-facebook">&nbsp;&nbsp;&nbsp;&nbsp;</i></a> 
                </p>
            </div>
        );
    }
}

export default footer;
