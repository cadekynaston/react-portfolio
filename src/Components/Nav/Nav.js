import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render(props) {
    return (
      <div className="nav-container">
      <div className="nav-logo">
        <a href="#"><img src={this.props.logo} alt="missing"/></a>
      </div>
      <div className="nav-items">
        <a href="#">About</a>
        <a href="#">Experience</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
        </div>
      </div>
    );
  }
}

export default Nav;
