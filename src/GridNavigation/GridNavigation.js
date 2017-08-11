import React, { Component } from 'react';
import './GridNavigation.css';

class GridNavigation extends Component {
  constructor(props) {
    super(props)
  }
  
  navigateBoard(direction) {
    // return the follow, [vertical movement, horizonal movement]
    const movement =
      direction === "top"
        ? [-1, 0] :
      direction === "right"
        ? [0, 1] :
      direction === "bottom"
        ? [1, 0] :
      direction === "left"
        ? [0, -1]
        : [0, 0] // if we get here somehow provide no movement
    
    // update the amount of movement
    this.props.updateBoardPosition(movement)
  }

  render() {
    return (
      <div className="GridNavigation">
        {/* Top Navigation Button*/}
        <div 
          className="top"
          onClick={this.navigateBoard.bind(this, "top")}> 
            <span>top</span>
        </div>

        {/* Right Navigation Button */}
        <div 
          className="right"
          onClick={this.navigateBoard.bind(this, "right")}> 
            <span>right</span>
        </div>

        {/* Bottom Navigation Button */}
        <div 
          className="bottom"
          onClick={this.navigateBoard.bind(this, "bottom")}> 
            <span>bottom</span>
        </div>

        {/* Left Navigation Button */}
        <div 
          className="left"
          onClick={this.navigateBoard.bind(this, "left")}> 
            <span>left</span>
        </div>
      </div>
    );
  }
}

export default GridNavigation
