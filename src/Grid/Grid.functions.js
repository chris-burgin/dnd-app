const createArray = (min, max) =>
  [...Array(max).keys()].splice(min)

const isSelectedBoardItem = (arr1, arr2) =>
  arr1[0] === arr2[0] && arr1[1] === arr2[1]

export {
  createArray,
  isSelectedBoardItem
}