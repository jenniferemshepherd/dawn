'use strict';

describe("Cell", function() {
  var cell;
  var bodyCircle = Matter.Bodies.circle(400, 200, 40)
  var stoop = {}

  beforeEach(function() {
    cell = new Cell(bodyCircle, stoop);
  });

  it("has a body", function() {
    expect(cell.body()).toEqual(bodyCircle)
  });

  it("has a gait", function() {
    expect(cell.gait()).toEqual(stoop)
  });

});
