import React, { Component } from 'react';
import './ExpTile.css';

class ExpTile extends Component {
  render(props) {
    return (
      <div className="experience-tile">
      <img className="icon" src={this.props.img} alt="missing"/>
        <div className="description-container">
          <div className="title">
            {this.props.title}
          </div>
          <div className="description">
            {this.props.description}
          </div>
          <div className="year">
            {this.props.year}
          </div>
        </div>
      </div>
    );
  }
}

export default ExpTile;
