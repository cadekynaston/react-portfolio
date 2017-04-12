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
import jsfiddle from '../public/jsfiddle.svg'
import logoWhite from '../public/logo-white.svg';
import logoBlack from '../public/logo-black.svg';
import briefcase from '../public/briefcase.svg';





class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "parallax-group">
          <div className="parallax-front">
            <Nav logo={logo}/>
            <Header />
          </div>
          <div className="parallax-back top-header">
          <img src={briefcase} alt="missing" />
            About Me
          </div>


          <div className="parallax-front">
            <div className="about-me"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div className="parallax-back middle-part">
            <img src={briefcase} alt="missing" />
            <p>Portfolio</p>

          </div>
          <div className="parallax-front">
            <div className="tile-container">
              <div className="exp-container">
                <PortTile  img={connect4} title="Connect4" link="https://cadekynaston.github.io/connect4/"/>
                <PortTile  img={jsfiddle} title="conn" link="http://jsfiddle.net/user/cadekynaston/"/>
                <PortTile  img={code} title="Drums" />
              </div>
            </div>
          </div>
          <div className="parallax-back">
            <img src={briefcase} alt="missing" />
              Experience
          </div>
          <div className="parallax-front">
            <div className="tile-container">
              <div className="exp-container">
                <ExpTile  img={grad} title="Weber State University" description="Bachelors degree computer science" year='Aug 2017'/>
                <ExpTile  img={plane} title="Hill Air Force Base" description="Computer Science Pathways Intern" year='May 2016 - current'/>
                <ExpTile  img={code} title="Weber State University" description="Chi Tester Programming intern" year='Dec 2016 - May 2016'/>
                <ExpTile  img={grocery} title="Smiths Food & Drug" description="Grocery Stocker / Cashier" year='Jun 2010 - Dec 2016'/>
              </div>
            </div>
          <div className="footer">
            <a href="">github</a>
            <a href="">facebook</a>
            <a href=""><img src={logoWhite} className="footer-logo" alt="missing"/></a>
            <a href="">instagram</a>
            <a href="">linked in</a>
          </div>
        </div>
      </div>

    </div>
    );
  }
}

export default App;
