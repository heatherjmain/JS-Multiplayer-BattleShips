var Cell = require("./cell.js")
// var Ship = require("./ship.js")

var Map = function() {
  this.cells = Array(64).fill(new Cell())
}


Map.prototype.checkIfPositionAvailable = function(ship, startPoint, direction) {

  ship.findRequiredCellsForShip(startPoint, direction)

  let cellsAvailable = null

  for (let position of ship.shipPosition) {
    if (this.cells[position].status === null) {
      cellsAvailable = true
    }
  }
  return cellsAvailable
}

Map.prototype.placeShip = function(ship, startPoint, direction) {
  if (this.checkIfPositionAvailable(ship, startPoint, direction)) {
    for (let position of ship.shipPosition) {
      this.cells[position].status = ship.name
    }
  }
}


module.exports = Map
