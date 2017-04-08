import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import ExpTile from './Components/ExpTile';
import PortTile from './Components/PortTile';
import slc from '../public/slc.jpg';
import grad from '../public/graduate.svg';
import code from '../public/code.svg';
import plane from '../public/plane.svg';
import grocery from '../public/grocery.svg';
import logo from '../public/logo.svg';
import mountain from '../public/mountain.jpg'
import connect4 from '../public/connect4.png'




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <img src={logo} className="main-logo" alt="Missing"/>
        <Nav />
        <div className="large-img-container">
          <img src={slc} alt="Missing"/>
        </div>
        <div className="tile-container">
          <h1>Education & Experience</h1>
          <div className="exp-container">
            <ExpTile  img={grad} title="Weber State University" description="Bachelors degree computer science" year='Aug 2017'/>
            <ExpTile  img={plane} title="Hill Air Force Base" description="Computer Science Pathways Intern" year='May 2016 - current'/>
            <ExpTile  img={code} title="Weber State University" description="Chi Tester Programming intern" year='Dec 2016 - May 2016'/>
            <ExpTile  img={grocery} title="Smiths Food & Drug" description="Grocery Stocker / Cashier" year='Jun 2010 - Dec 2016'/>
          </div>
        </div>

        <div className="large-img-container">
          <img src={mountain} alt="Missing"/>
        </div>

        <div className="tile-container">
          <h1>Portfolio</h1>
          <div className="exp-container">
            <PortTile  img={connect4} title="Connect4" link="https://cadekynaston.github.io/connect4/"/>
            <PortTile  img={plane} title="Hill Air Force Base" description="Computer Science Pathways Intern" year='May 2016 - current'/>
            <PortTile  img={code} title="Weber State University" description="Chi Tester Programming intern" year='Dec 2016 - May 2016'/>
            <PortTile  img={grocery} title="Smiths Food & Drug" description="Grocery Stocker / Cashier" year='Jun 2010 - Dec 2016'/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
