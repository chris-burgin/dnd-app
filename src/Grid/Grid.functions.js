const createArray = (min, max) =>
  [...Array(max).keys()].splice(min)

export {
  createArray
}