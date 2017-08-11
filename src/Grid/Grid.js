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

  updateBoardPosition([vM, hM]) {
    // get position
    const {position} = this.state

    // update position
    this.setState({
      position: [position[0] + vM, position[1] + hM]
    })
  }

  render() {
    // import variables
    const {position} = this.state

    return (
      <div className="Grid">
        {/* Navigation Component */}
        <GridNavigation
          updateBoardPosition={this.updateBoardPosition}/>

        <table className="Board">
          <tbody>
             {createArray(position[0], position[0]+ 30).map((i) => 
              <tr key={i}>
                 {createArray(position[1], position[1] + 30).map((i2) => 
                    <td key={i2}>
                      {i} : {i2}
                    </td>
                  )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Grid
