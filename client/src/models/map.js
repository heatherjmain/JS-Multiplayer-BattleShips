var Cell = require("./cell.js")
// var Ship = require("./ship.js")

var Map = function() {
  this.cells = Array(64).fill(new Cell())
}

Map.prototype.checkIfPositionAvailable = function(ship, startPoint, direction) {

  ship.findRequiredCellsForShip(startPoint, direction)

  const cellsAvailable = []

  for (let position of ship.shipPosition) {
    if (this.cells[position].status === null) {
      cellsAvailable.push(true)
    }
  }
  return cellsAvailable
}


module.exports = Map
