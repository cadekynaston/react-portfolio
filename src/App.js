import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import slc from '../public/slc.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <img src={slc} alt="Missing Image"/>
        <div className="App-Main">
          <h2>Education & Experience</h2>
        </div>


      </div>
    );
  }
}

export default App;
