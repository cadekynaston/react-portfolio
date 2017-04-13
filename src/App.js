import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import ExpTile from './Components/ExpTile';
import PortTile from './Components/PortTile';
import slc from '../public/slc.jpg';
import grad from '../public/graduate.svg';
import code from '../public/code.svg';
import paper from '../public/paper.svg';
import groceries from '../public/groceries.svg';
import logo from '../public/logo.svg';
import mountain from '../public/mountain.jpg'
import connect4 from '../public/connect4.png'
import jsfiddle from '../public/jsfiddle.svg'
import logoWhite from '../public/logo-white.svg';
import logoBlack from '../public/logo-black.svg';
import briefcase from '../public/briefcase.svg';
import turtle from '../public/turtle.svg';
import mailbox from '../public/mailbox.svg';
import pantone from '../public/pantone.svg';
import weber from '../public/weber.jpg';
import earth from '../public/earth.svg';
import desktop from '../public/desktop.svg';
import codepen from '../public/codepen.svg';
import umbrella from '../public/umbrella.svg';



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
            <div id="about" className="about-me">
              <p>My name is Cade. I am graduating from Weber State University with a Bachelors Degree in computer science at the end of summer 2017. The main thing you need to know about me is that I really like doing good work. Also, I love <a href="">skateboarding</a> and <a href="https://www.instagram.com/p/vC6hvLjnbJ/?taken-by=cadekynaston">basketball</a>.</p>
            </div>
          </div>
          <div className="parallax-back">
            <img src={pantone} alt="missing" />
            Portfolio
          </div>
          <div className="parallax-front">
            <div id="portfolio" className="tile-container">
              <div className="exp-container">
                <PortTile  img={connect4} title="Connect4" link="https://cadekynaston.github.io/connect4/"/>
                <PortTile  img={jsfiddle} title="JSfiddle" link="https://jsfiddle.net/user/cadekynaston/"/>
                <PortTile  img={codepen} title="Codepen" link="https://codepen.io/cadekynastoN/"/>
                <PortTile  img={umbrella} title="Connect4" link="https://cadekynaston.github.io/connect4/"/>

              </div>
            </div>
          </div>
          <div className="parallax-back">
            <img src={earth} alt="missing" />
              Experience
          </div>
          <div className="parallax-front">
            <div id="experience" className="tile-container">
              <div className="exp-container">
                <ExpTile  img={weber} title="Weber State University" description="Bachelors Degree Computer Science"/>
                <ExpTile  img={paper} title="Hill Air Force Base" description="Computer Science Pathways Intern"/>
                <ExpTile  img={desktop} title="Weber State University" description="Chi Tester Programming Intern"/>
                <ExpTile  img={groceries} title="Smiths Food & Drug" description="Grocery Stocker / Cashier"/>
              </div>
            </div>
        </div>
        <div className="parallax-back">
          <img src={mailbox} alt="missing" />
            Contact
        </div>
        <div className="parallax-front">

        <div id="contact" className="footer">
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
