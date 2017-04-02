import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import ExpTile from './Components/ExpTile';
import slc from '../public/slc.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <div className="large-img-container">
          <img src={slc} alt="Missing Image"/>
        </div>
        <div className="education-experience">
          <h2>Education & Experience</h2>
          <div className="exp-container">
            <ExpTile />
            <ExpTile />
            <ExpTile />
            <ExpTile />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
