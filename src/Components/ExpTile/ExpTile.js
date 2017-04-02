import React, { Component } from 'react';
import './ExpTile.css';

class ExpTile extends Component {
  render(props) {
    return (
      <div className="experience-tile">
        <div className="icon">
          8
        </div>
        <div className="description">
          This is where the description will go
        </div>
      </div>
    );
  }
}

export default ExpTile;
