'use strict';

describe("Cell", function() {
  var cell;
  var mockBody;
  var mockGait;
  var mockCurrentTime = 12500;
  var mockAdolescentAge = {
    value: function() { return 1000 }
  };
  var mockMiddleAge = {
    value: function() { return 12000 }
  };
  var mockElderlyAge = {
    value: function() { return 60000 }
  };

  beforeEach(function() {
    cell = new Cell(mockBody, mockGait, mockAdolescentAge);
  });

  describe("initially,", function() {

    it("has a body", function() {
      expect(cell.body()).toEqual(mockBody);
    });

    it("has a gait", function() {
      expect(cell.gait()).toEqual(mockGait);
    });

    it("has an age", function() {
      expect(cell.age()).toEqual(mockAdolescentAge);
    });

    it("is infertile", function() {
      expect(cell.isFertile()).toEqual(false);
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

  describe("#isFertile()", function() {

    it("returns true when cell has finished puberty", function() {
      cell = new Cell(mockBody, mockGait, mockMiddleAge);
      expect(cell.isFertile(mockCurrentTime)).toEqual(true);
    });

    it("returns false when cell has recently reproduced", function() {
      cell = new Cell(mockBody, mockGait, mockMiddleAge);
      cell.updateLastReproduction(mockCurrentTime);
      expect(cell.isFertile(mockCurrentTime)).toEqual(false);
    });

    it("returns true when cell is adult and has not reproduced recently", function() {
      cell = new Cell(mockBody, mockGait, mockMiddleAge);
      cell.updateLastReproduction(mockCurrentTime);
      expect(cell.isFertile(mockCurrentTime + 8000)).toEqual(true);
    });

    it("returns false when cell is elderly", function() {
      cell = new Cell(mockBody, mockGait, mockElderlyAge);
      expect(cell.isFertile(mockCurrentTime)).toEqual(false);
    });

  })

});
