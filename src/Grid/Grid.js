// module imports
import React, { Component } from 'react';

// component imports
import GridNavigation from '../GridNavigation/GridNavigation'
import GridColor from '../GridColor/GridColor'

// function import
import {
  createArray,
  isSelectedBoardItem
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
      boardItems: {},
      position: [0, 0], // [vertical, horizontal]
      selectedBoardItem: [null, null]
    }

    // bind functions
    this.updateBoardPosition = this.updateBoardPosition.bind(this)
    this.selectBoardItem = this.selectBoardItem.bind(this)
    this.updateBoardItemColor = this.updateBoardItemColor.bind(this)
  }

  updateBoardPosition(position) {
    // update position
    this.setState({
      position: position
    })
  }

  selectBoardItem([i, i2]) {
    // get the selected board item
    const selectedBoardItem = this.state.selectedBoardItem

    // break down the board item
    const [si, si2] = selectedBoardItem

    // check if we should deselect
    const newSelectedBoardItem = 
      i === si && i2 === si2
        ? [null, null] // deselect
        : [i, i2] // select the new item

    // update teh selection
    this.setState({selectedBoardItem: newSelectedBoardItem})
  }

  updateBoardItemColor(backgroundColor) {
    // get variables
    const [si1, si2] = this.state.selectedBoardItem
    let boardItems = {...this.state.boardItems}

    // check if items exist, if not create
    boardItems[`${si1}:${si2}`]
      ? true // exists, true does nothing
      : boardItems[`${si1}:${si2}`] = {}
    
    // set color
    boardItems[`${si1}:${si2}`].backgroundColor = backgroundColor

    // update the state
    this.setState({boardItems: boardItems})
  }

  render() {
    // import variables
    const {position, selectedBoardItem, boardItems} = this.state

    return (
      <div className="Grid">
        <div className="Controls">
          <GridNavigation
            position={position}
            updateBoardPosition={this.updateBoardPosition}/>
          <GridColor
            boardItem={boardItems[`${selectedBoardItem[0]}:${selectedBoardItem[1]}`]}
            updateBoardItemColor={this.updateBoardItemColor}/>
        </div>

        <div className="Board">
             {createArray(position[0], position[0]+ 20).map((i) => 
              <div key={i} className="row">
                 {createArray(position[1], position[1] + 20).map((i2) => 
                  <div
                    data-selected={isSelectedBoardItem(selectedBoardItem, [i, i2])}
                    style={boardItems[`${i}:${i2}`]}
                    onClick={this.selectBoardItem.bind(this, [i, i2])}
                    key={i2} 
                    className="item">
                      {i} : {i2} </div>
                  )}
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default Grid
