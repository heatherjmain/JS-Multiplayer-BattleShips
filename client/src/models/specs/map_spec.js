var assert = require("assert")
var Map = require("../map.js")
var Cell = require("../cell.js")
var Ship = require("../ship.js")

describe("Map", function() {
  var myMap
  var cell
  var destroyer


  beforeEach(function() {
    myMap = new Map()
    cell = new Cell()
    destroyer = new Ship("Destroyer", 4)
  })

  it("should have 64 cells", function() {
    assert.strictEqual(64, myMap.cells.length)
    assert.deepStrictEqual(cell, myMap.cells[0])
    assert.deepStrictEqual(null, myMap.cells[63].status)
  })

  it("should be able to check if required positions are available", function() {
    assert.deepStrictEqual([true, true, true, true], myMap.checkIfPositionAvailable(destroyer, 0, "horizontal"))
  })
})
