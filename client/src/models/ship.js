// var MapContainer = require("../containers/MapContainer.jsx")

var Ship = function(name, length) {
  this.name = name,
  this.length = length,
  this.shipPosition = []
  // this.startPoint = null
}

Ship.prototype.findRequiredCellsForShip = function(startPoint, direction) {
  if (direction === "horizontal") {
    for (let i=startPoint; i<startPoint+this.length; i++) {
      this.shipPosition.push(i)
    }
  } else {
    for (let i=startPoint; i<startPoint+(this.length*8); i+=8) {
      this.shipPosition.push(i)
    }
  }
}

// Ship.prototype.checkIfPositionAvailable = function() {
//   const cellsAvailable = []
//
//   this.findRequiredCellsForShip()
//
//   for (let cell of this.shipPosition) {
//     if (cell.status === null) {
//       cellsAvailable.push(true)
//     }
//   }
//   return cellsAvailable
// }



module.exports = Ship
