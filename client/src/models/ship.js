// var MapContainer = require("../containers/MapContainer.jsx")

var Ship = function(name, length) {
  this.name = name,
  this.length = length,
  this.shipPosition = []
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


module.exports = Ship
