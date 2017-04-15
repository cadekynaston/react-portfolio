import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import ExpTile from './Components/ExpTile';
import PortTile from './Components/PortTile';
import paper from '../public/paper.svg';
import groceries from '../public/groceries.svg';
import logo from '../public/logo.svg';
import connect4 from '../public/connect4.png'
import jsfiddle from '../public/jsfiddle.svg'
import logoWhite from '../public/logo-white.svg';
import turtle from '../public/turtle.svg';
import mailbox from '../public/mailbox.svg';
import pantone from '../public/pantone.svg';
import weber from '../public/weber.jpg';
import earth from '../public/earth.svg';
import desktop from '../public/desktop.svg';
import codepen from '../public/codepen.svg';
import li from '../public/linkedin.svg'
import gh from '../public/github.svg'
import email from '../public/email.svg';



class App extends Component {


    render() {
    return (
      <div className="App">
        <div className = "parallax">
          <div className="parallax-layer parallax-front">
              <Nav logo={logo} />
              <Header />
          </div>
          <div className="parallax-layer parallax-back">
          <img src={turtle} alt="missing" />
            About Me
          </div>

          <div className="parallax-layer parallax-front">
            <div id="about"  className="about-me">
              <p>My name is Cade. I am graduating from Weber State University with a bachelor's degree in computer science at the end of summer 2017. The main thing you need to know about me is that I enjoy programming and I really like doing good work. Lately I have been focusing on making web apps using javascript and C#. I learned react to make this website! Also, I love <a href="">skateboarding</a> and <a href="https://www.instagram.com/p/vC6hvLjnbJ">basketball</a>.</p>
            </div>
          </div>
          <div className="parallax-layer parallax-back">
            <img src={pantone} alt="missing" />
            Portfolio
          </div>
          <div className="parallax-layer parallax-front">
            <div className="tile-container">
              <div id="portfolio" className="exp-container">
                <PortTile  img={connect4} x="first-tile" title="Connect4" description="A game I created using html, css, and vanilla js." link="https://cadekynaston.github.io/connect4/"/>
                <PortTile  img={jsfiddle} title="JSfiddle" description="Jsfiddle is awesome for doing small online coding projects." link="https://jsfiddle.net/user/cadekynaston/"/>
                <PortTile  img={codepen} title="Codepen" description="Codepen is similar to jsfiddle. A nice place to do little coding experiments." link="https://codepen.io/cadekynastoN/"/>
              </div>
            </div>
          </div>
          <div className="parallax-layer parallax-back">
            <img src={earth} alt="missing" />
              Experience
          </div>
          <div className="parallax-layer parallax-front">
            <div className="tile-container">
              <div id="experience" className="exp-container">
                <ExpTile  img={weber} title="Weber State University" description="Bachelors Degree Computer Science"/>
                <ExpTile  img={paper} title="Hill Air Force Base" description="Computer Science Pathways Intern"/>
                <ExpTile  img={desktop} title="Weber State University" description="Chi Tester Programming Intern"/>
                <ExpTile  img={groceries} title="Smiths Food & Drug" description="Grocery Stocker / Cashier"/>
              </div>
            </div>
        </div>
        <div className="parallax-layer parallax-back footer-parallax">
          <img src={mailbox} alt="missing" />
              <p>Thanks for stopping by! Send me a message if you would like to get in touch. Check the lower left corner or send an email to: cadekynaston@gmail.com</p>
        </div>
        <div className="parallax-layer parallax-front">

        <div id="contact" className="footer-container ">
          <div className="footer">
            <div className="social-container">
              <a href="https://www.linkedin.com/in/cade-kynaston-003134ba" className="social-icon"><img src={li} alt="missing"/></a>
              <a href="http://www.github.com/cadekynaston" className="social-icon"><img src={gh} alt="missing"/></a>
              <a href="mailto:cadekynaston@gmail.com?Subject=Hey%20Cade" className="social-icon"><img src={email} alt="missing"/></a>
            </div>
            <div className="footer-name">
              Cade Kynaston 2017
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>
    );
  }
}

export default App;
