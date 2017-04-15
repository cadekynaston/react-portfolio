import React, { Component } from 'react';
import hideShow from './../../scripts/script';

import './Nav.css';

class Nav extends Component {

  render(props) {
    return (
      <div className="nav-container">
        <div className="nav">
          <div className="logo-button-container">
            <div className="nav-logo">
              <a href="#"><img src={this.props.logo} alt="missing"/></a>
            </div>
            <div className="nav-button" onClick={hideShow}>menu</div>
          </div>
          <div className="nav-items hide" id="nav-id">
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
