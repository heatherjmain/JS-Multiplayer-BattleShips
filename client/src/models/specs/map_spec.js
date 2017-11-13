var assert = require("assert")
var Map = require("../map.js")
var Cell = require("../cell.js")
var Ship = require("../ship.js")

describe("Map", function() {
  var myMap
  var cell
  var destroyer
  var battleship


  beforeEach(function() {
    myMap = new Map()
    cell = new Cell()
    destroyer = new Ship("Destroyer", 4)
    battleship = new Ship("Battleship", 6)
  })

  it("should have 64 cells", function() {
    assert.strictEqual(64, myMap.cells.length)
    assert.deepStrictEqual(cell, myMap.cells[0])
    assert.deepStrictEqual(null, myMap.cells[63].status)
  })

  it("should be able to check if required positions are available", function() {
    assert.strictEqual(true, myMap.checkIfPositionAvailable(destroyer, 0, "horizontal"))
  })

  it("should be able to place destroyer horizontally, and have all cells status' change to ship name", function() {
    myMap.placeShip(destroyer, 0, "horizontal")
    assert.strictEqual("Destroyer", myMap.cells[0].status)
    assert.strictEqual("Destroyer", myMap.cells[1].status)
    assert.strictEqual("Destroyer", myMap.cells[2].status)
    assert.strictEqual("Destroyer", myMap.cells[3].status)
  })

  it("should be able to place battleship vertically, and have all cells status' change to ship name", function() {
    myMap.placeShip(battleship, 12, "vertical")
    assert.strictEqual("Battleship", myMap.cells[12].status)
    assert.strictEqual("Battleship", myMap.cells[20].status)
    assert.strictEqual("Battleship", myMap.cells[28].status)
    assert.strictEqual("Battleship", myMap.cells[36].status)
    assert.strictEqual("Battleship", myMap.cells[44].status)
    assert.strictEqual("Battleship", myMap.cells[52].status)
  })
})
