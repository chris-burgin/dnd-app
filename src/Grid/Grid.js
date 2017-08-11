// module imports
import React, { Component } from 'react';

// component imports
import GridNavigation from '../GridNavigation/GridNavigation'

// function import
import {
  createArray
} from "./Grid.functions"

// resource imports
// --- none yet ---

// style imports
import './Grid.css';

class Grid extends Component {
  constructor(props) {
    super(props)

    // setup state
    this.state = {
      position: [0, 0] // [vertical, horizontal]
    }

    // bind functions
    this.updateBoardPosition = this.updateBoardPosition.bind(this)
  }

  updateBoardPosition(position) {
    // update position
    this.setState({
      position: position
    })
  }

  render() {
    // import variables
    const {position} = this.state

    return (
      <div className="Grid">
        <div className="Controls">
          <GridNavigation
            position={position}
            updateBoardPosition={this.updateBoardPosition}/>
        </div>

        <div className="Board">
             {createArray(position[0], position[0]+ 50).map((i) => 
              <div key={i} className="row">
                 {createArray(position[1], position[1] + 50).map((i2) => 
                    <div key={i2} className="item">
                      {i} : {i2}
                    </div>
                  )}
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default Grid
