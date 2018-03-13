'use strict';

describe("Cell", function() {
  var cell;
  var bodyCircle = Matter.Bodies.circle(400, 200, 40);
  var stoop = {};
  var mockAge = {
    value: function() { return }
  };
  var mockCurrentTime = 7500;

  beforeEach(function() {
    cell = new Cell(bodyCircle, stoop, mockAge);
  });

  describe("initially,", function() {

    it("has a body", function() {
      expect(cell.body()).toEqual(bodyCircle)
    });

    it("has a gait", function() {
      expect(cell.gait()).toEqual(stoop)
    });

    it("has an age", function() {
      expect(cell.age()).toEqual(mockAge)
    });

    it("is infertile", function() {
      expect(cell.isFertile()).toEqual(false)
    });

  });

  describe("#updateLastReproduction()", function() {

    beforeEach(function() {
      cell.updateLastReproduction(mockCurrentTime);
    });

    it("updates the cells' lastReproduction property", function() {
      expect(cell.lastReproduction()).toEqual(mockCurrentTime);
    });

  });

});
