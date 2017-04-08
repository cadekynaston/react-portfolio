import React, { Component } from 'react';
import './PortTile.css';

class PortTile extends Component {
  render(props) {
    return (
      <div className="portfolio-tile">
        <a href={this.props.link}>
          <img className="item-image" src={this.props.img} alt="missing"/>
          <div className="middle-text-container">
            <div className="middle-text">
              {this.props.title}
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default PortTile;
