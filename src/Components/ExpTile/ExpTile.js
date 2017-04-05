import React, { Component } from 'react';
import './ExpTile.css';

class ExpTile extends Component {
  render(props) {
    return (
      <div className="experience-tile">
      <img className="icon" src={this.props.img} alt="missing"/>
        <div className="description-container">
          <div className="title">
            TITLE
          </div>
          <div className="description">
            description
            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpTile;
