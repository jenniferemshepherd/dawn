'use strict';

describe("BirthCell", function() {
  // mocking instantiators
  var birthCell;
  var mockCellFactory = {
    createFromParents: function() { return }
  };
  var mockCell = {
    isFertile: function() { return true },
    updateLastReproduction: function() { return }
  };
  var mockCellRepository = {
    findCellByBodyId: function() { return mockCell }
  };

  // mocking event
  var mockTimestamp = 26;
  var mockTiming = {
    timestamp: mockTimestamp
  };
  var mockSource = {
    timing: mockTiming
  };

  // mocking reproductive body
  var mockReproductiveBody = {
    label: 'Circular Body',
    id: 1
  };
  var mockReproductivePair = {
    bodyA: mockReproductiveBody,
    bodyB: mockReproductiveBody
  };
  var mockReproductivePairs = [mockReproductivePair];
  var mockReproductiveEvent = {
    pairs: mockReproductivePairs,
    source: mockSource
  };

  // mocking boundary body
  var mockBoundaryBody = {
    label: 'Rectangle Body',
  };
  var mockBoundaryPair = {
    bodyA: mockReproductiveBody,
    bodyB: mockBoundaryBody
  };
  var mockBoundaryPairs = [mockBoundaryPair];
  var mockBoundaryEvent = {
    pairs: mockBoundaryPairs,
    source: mockSource
  };

  beforeEach(function() {
    birthCell = new BirthCell(mockCellFactory, mockCellRepository);
  });

  describe("#action()", function() {

    describe("if cells should reproduce", function() {

      beforeEach(function() {
        spyOn(mockCell, 'updateLastReproduction');
        spyOn(mockCellFactory, 'createFromParents');
        birthCell.action(mockReproductiveEvent);
      });

      it("updates parents' last reproduction", function() {
        expect(mockCell.updateLastReproduction).toHaveBeenCalledTimes(2);
      });

      it("calls #createFromParents() on its cell factory", function() {
        expect(mockCellFactory.createFromParents).toHaveBeenCalled();
      });

    });

    describe("if one or more colliders is a boundary", function() {

      beforeEach(function() {
        spyOn(mockCell, 'updateLastReproduction');
        spyOn(mockCellFactory, 'createFromParents');
        birthCell.action(mockBoundaryEvent);
      });

      it("does not update parents' last reproduction", function() {
        expect(mockCell.updateLastReproduction).toHaveBeenCalledTimes(0);
      });

      it("does not call #createFromParents() on its cell factory", function() {
        expect(mockCellFactory.createFromParents).toHaveBeenCalledTimes(0);
      });

    });

  })
});
