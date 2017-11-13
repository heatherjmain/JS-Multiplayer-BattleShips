var assert = require("assert")
var Ship = require("../ship.js")
// var placeShip = require("../placeShip.js")

describe("Ship", function() {
  var battleship
  var destroyer

  beforeEach(function() {
    battleship = new Ship("Battleship", 6)
    destroyer = new Ship("Destroyer", 4)
  })

  it("should have a name", function() {
    assert.strictEqual("Battleship", battleship.name)
  })

  it("should have a length", function() {
    assert.strictEqual(6, battleship.length)
  })

  it("should have no position at start", function() {
    assert.deepStrictEqual([], battleship.shipPosition)
  })

  it("should be able to record all indexes of battleship when being placed horizontally", function() {
    battleship.findRequiredCellsForShip(0, "horizontal")
    assert.deepStrictEqual([0, 1, 2, 3, 4, 5], battleship.shipPosition)
  })

  it("should be able to record all indexes of destroyer when being placed horizontally", function() {
    destroyer.findRequiredCellsForShip(14, "horizontal")
    assert.deepStrictEqual([14, 15, 16, 17], destroyer.shipPosition)
  })

  it("should be able to record all indexes of battleship when being placed vertically", function() {
    battleship.findRequiredCellsForShip(10, "vertical")
    assert.deepStrictEqual([10, 18, 26, 34, 42, 50], battleship.shipPosition)
  })

  it("should be able to record all indexes of destroyer when being placed vertically", function() {
    destroyer.findRequiredCellsForShip(24, "vertical")
    assert.deepStrictEqual([24, 32, 40, 48], destroyer.shipPosition)
  })

  
})
