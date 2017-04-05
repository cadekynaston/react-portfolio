import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import ExpTile from './Components/ExpTile';
import slc from '../public/slc.jpg';
import grad from '../public/graduate.svg';
import code from '../public/code.svg';
import plane from '../public/plane.svg';
import grocery from '../public/grocery.svg';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <div className="large-img-container">
          <img src={slc} alt="Missing"/>
        </div>
        <div className="education-experience">
          <h1>Education & Experience</h1>
          <div className="exp-container">
            <ExpTile  img={grad} title="Weber State University" description="Bachelors degree in computer science"/>
            <ExpTile  img={plane} title="Hill Air Force Base" description="Bachelors degree in computer science"/>
            <ExpTile  img={code} title="Weber State University" description="Bachelors degree in computer science"/>
            <ExpTile  img={grocery} title="Weber State University" description="Bachelors degree in computer science"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
