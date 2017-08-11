import React, { Component } from 'react';
import './GridColor.css';

class GridColor extends Component {
  constructor(props) {
    super(props)

    // bind
    this.colorChange = this.colorChange.bind(this)
  }

  colorChange(event) {
    this.props.updateBoardItemColor(event.target.value)
  }

  render() {
    // import variables
    const {boardItem} = this.props
    console.log(boardItem)
    
    return (
      <div className="GridColor">
        <input 
          type="color" 
          onChange={this.colorChange}/>
      </div>
    );
  }
}

export default GridColor
