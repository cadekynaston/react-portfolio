import React, { Component } from 'react';
import './ExpTile.css';

class ExpTile extends Component {
  render(props) {
    return (
      <div className="experience-tile">
        <img className="icon" src={this.props.img} alt="missing"/>
        <div className="title">
          {this.props.title}
        </div>
        <div className="description">
          {this.props.description}
        </div>
      </div>
    );
  }
}

export default ExpTile;
