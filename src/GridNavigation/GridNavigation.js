import React, { Component } from 'react';
import './GridNavigation.css';

class GridNavigation extends Component {
  constructor(props) {
    super(props)
  }
  
  navigateBoard(direction) {
    // calculate the movement, [vertical movement, horizonal movement]
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
    
    // get old position
    const position = this.props.position

    // calculate the new position
    const newPosition =  [position[0] + movement[0], position[1] + movement[1]]

    // update the amount of movement
    this.props.updateBoardPosition(newPosition)
  }

  render() {
    // import variables
    const {position} = this.props
    
    return (
      <div className="GridNavigation">
        <h3> Navigation </h3>
        <div className="wrapper">
          {/* Top Navigation Button*/}
          <div 
            className="top"
            onClick={this.navigateBoard.bind(this, "top")}> 
              <i className="fa fa-chevron-up"></i>
          </div>

          {/* Bottom Navigation Button */}
          <div 
            className="bottom"
            onClick={this.navigateBoard.bind(this, "bottom")}> 
              <i className="fa fa-chevron-down"></i>
          </div>

          {/* Left Navigation Button */}
          <div 
            className="left"
            onClick={this.navigateBoard.bind(this, "left")}> 
              <i className="fa fa-chevron-left"></i>
          </div>

          {/* Right Navigation Button */}
          <div 
            className="right"
            onClick={this.navigateBoard.bind(this, "right")}> 
              <i className="fa fa-chevron-right"></i>
          </div>
        </div>
        <span className="location"> {position[0]}:{position[1]} </span>
      </div>
    );
  }
}

export default GridNavigation
