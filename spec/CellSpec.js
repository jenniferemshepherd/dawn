'use strict';

describe("Cell", function() {
  var cell;
  var bodyCircle = Matter.Bodies.circle(400, 200, 40)

  beforeEach(function() {
    cell = new Cell(bodyCircle);
  });

  it("has a body", function() {
    expect(cell.body()).toEqual(bodyCircle)
  });

});
