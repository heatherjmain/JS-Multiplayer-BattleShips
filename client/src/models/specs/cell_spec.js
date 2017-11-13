var assert = require("assert")
var Cell = require("../cell.js")

describe("Cell", function() {
  var cell

  beforeEach(function() {
    cell = new Cell()
  })

  it("should start with null status", function*() {
    assert.strictEqual(null, cell.status)
  })
})
