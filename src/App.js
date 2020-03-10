import React from 'react';
import './App.css';
import Background from './components/bg';
import Navbar from './components/navbar';
import Home from './components/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer'
import Projects from './components/projects'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  
  render(){
    return(
      <Router>
      <Switch>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      <Navbar />
      <Background/>
      <Footer/>
      </Router>
    )
  }
}
export default App;
