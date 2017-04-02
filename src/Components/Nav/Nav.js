import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <a href="#">About</a>
        <a href="#">Experience</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
      </div>
    );
  }
}

export default Nav;
