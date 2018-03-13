'use strict';

describe("Cell", function() {
  var cell;
  var bodyCircle = Matter.Bodies.circle(400, 200, 40);
  var stoop = {};
  var mockAge;


  beforeEach(function() {
    cell = new Cell(bodyCircle, stoop, mockAge);
  });

  it("has a body", function() {
    expect(cell.body()).toEqual(bodyCircle)
  });

  it("has a gait", function() {
    expect(cell.gait()).toEqual(stoop)
  });

  it("has an age", function() {
    expect(cell.mockAge).toEqual(mockAge)
  });

  it("has a default fertility of false", function() {
    expect(cell.fertility()).toEqual(false)
  });

  describe("#makeFertile", function() {

    it("changes the fertility of the cell to true", function() {
      cell.makeFertile();
      expect(cell.fertility()).toEqual(true);
    });

  });

  describe("#makeInfertile", function() {

    beforeEach(function() {
      cell.makeFertile();
    });

    it("changes the fertility of the cell to false", function() {
      cell.makeInfertile();
      expect(cell.fertility()).toEqual(false);
    })

  })

});
