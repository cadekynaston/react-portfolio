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
import data from '../public/data.js';



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
            <ExpTile  img={grad} title="Weber State University" description="Bachelors degree computer science" year='Aug 2017'/>
            <ExpTile  img={plane} title="Hill Air Force Base" description="Computer Science Pathways Intern" year='May 2016 - current'/>
            <ExpTile  img={code} title="Weber State University" description="Chi Tester Programming intern" year='Dec 2016 - May 2016'/>
            <ExpTile  img={grocery} title="Smiths Food & Drug" description="Grocery Stocker / Cashier" year='jun 2010 - Dec 2016'/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
