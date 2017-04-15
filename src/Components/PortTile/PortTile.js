import React, { Component } from 'react';
import './PortTile.css';

class PortTile extends Component {
  render(props) {
    return (
      <div className={"portfolio-tile " + this.props.x}>
        <a href={this.props.link} target="_blank">
          <img className="item-image" src={this.props.img} alt="missing"/>
          <div className="middle-text-container">
            <div className="middle-text">
              {this.props.description}
            </div>
          </div>
          <div className="portfolio-tile-title">
            {this.props.title}
          </div>
          </a>

      </div>
    );
  }
}

export default PortTile;
