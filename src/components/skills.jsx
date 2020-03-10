import React, { Component } from 'react';
import './css/skills.css'

export class skills extends Component {
    render() {
        if(this.props.object.skills)
        return (
            <div id="skills">
            <div className="container p-4">
            <h1  className="text-center">SKILL SET</h1>
            <br/>
            <div class="row">
                <div class="col-sm-2">.col-s</div>
                <div class="col-sm-10">
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:"95%"}}>
                        C (Programming Language)
                    </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-2">.col-sm-4</div>
                <div class="col-sm-10">
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:"85%"}}>
                        C++ (Programming Language)
                    </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-2">.col-sm-4</div>
                <div class="col-sm-10">
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:"95%"}}>
                        HTML, CSS, Bootstrap, JavaScript 
                    </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-2">.col-sm-4</div>
                <div class="col-sm-10">
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:"95%"}}>
                        jQuery
                    </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-2">.col-sm-4</div>
                <div class="col-sm-10">
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:"95%"}}>
                        ReactJS
                    </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-2">.col-sm-4</div>
                <div class="col-sm-10">
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:"95%"}}>
                        NodeJS
                    </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-2">.col-sm-4</div>
                <div class="col-sm-10">
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:"95%"}}>
                        MongoDB
                    </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-2">.col-sm-4</div>
                <div class="col-sm-10">
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:"95%"}}>
                        git
                    </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-2">.col-sm-4</div>
                <div class="col-sm-10">
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:"95%"}}>
                        Adobe Photoshop
                    </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-2">.col-sm-4</div>
                <div class="col-sm-10">
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:"95%"}}>
                        Adobe Illustrator
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
        else 
        return(
            <div>

            </div>
        )
    }
}

export default skills;
