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
import turtle from '../public/turtle.svg';
import mailbox from '../public/mailbox.svg';




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
          <img src={turtle} alt="missing" />
            About Me
          </div>


          <div className="parallax-front">
            <div className="about-me">
              <p>My name is Cade. I am graduating from Weber State University with a Bachelors Degree in computer science at the end of summer 2017. The main thing you need to know about me is that I really like doing good work. Also, I love <a href="">skateboarding</a> and <a href="https://www.instagram.com/p/vC6hvLjnbJ/?taken-by=cadekynaston">basketball</a>.</p>
            </div>
          </div>
          <div className="parallax-back middle-part">
            <img src={briefcase} alt="missing" />
            Portfolio
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
            <img src={mailbox} alt="missing" />
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
        </div>
        <div className="parallax-back">
          <img src={mailbox} alt="missing" />
            Contact
        </div>
        <div className="parallax-front">

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
