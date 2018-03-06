'use strict';

describe("Cell", function() {
  var cell;

  beforeEach(function() {
    cell = new Cell(400, 300);
  });

  it("has an initial x position", function() {
    expect(cell.x()).toEqual(400)
  });

  it("has an initial y position", function() {
    expect(cell.y()).toEqual(300)
  });

});
