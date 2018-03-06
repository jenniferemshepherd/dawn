'use strict';

describe("Cell", function() {
  var cell;

  beforeEach(function() {
    cell = new Cell();
  });

  it("has an initial position", function() {
    expect(cell.x).toEqual(400)
    expect(cell.y).toEqual(300)
  });

});
