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


  // it("has an initial x position", function() {
  //   expect(cell.x()).toEqual(400)
  // });
  //
  // it("has an initial y position", function() {
  //   expect(cell.y()).toEqual(300)
  // });

});
