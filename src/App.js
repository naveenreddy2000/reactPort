import React from 'react';
import './App.css';
import Background from './components/bg';
import Navbar from './components/navbar';
import Home from './components/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      home : true,
      skills : false,
      projects : false,
      contact : false
    }
  }
  showHome = ()=>{
    this.setState({
      home : true,
      skills : false,
      projects : false,
      contact : false
    })
  }
  showSkills = ()=>{
    this.setState({
      home : false,
      skills : true,
      projects : false,
      contact : false
    })
  }
  showProjects = ()=>{
    this.setState({
      home : false,
      skills : false,
      projects : true,
      contact : false
    })
  }
  showContact = ()=>{
    this.setState({
      home : false,
      skills : false,
      projects : false,
      contact : true
    })
  }
  render(){
    return(
      <div>
      <Home object = {this.state}/>
      <Skills object = {this.state}/>
      <Contact object={this.state} />
      <Navbar showHome = {this.showHome} showSkills = {this.showSkills}
          showProjects = {this.showProjects} showContact = {this.showContact}/>
      <Background/>
      <Footer/>
      </div>
    )
  }
}
export default App;
