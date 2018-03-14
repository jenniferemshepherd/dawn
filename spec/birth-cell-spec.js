'use strict';

describe("BirthCell", function() {
  // mocking instantiators
  var birthCell;
  var mockCellFactory = {
    createFromParents: function() { return }
  };

  // mocking event properties and sub-properties
  var mockTimestamp = 26;
  var mockTiming = {
    timestamp: mockTimestamp
  };
  var mockSource = {
    timing: mockTiming
  };

  // mocking fertile cell
  var mockFertileCell = {
    isFertile: function() { return true },
    updateLastReproduction: function() { return }
  };
  var mockFertileCellRepository = {
    findCellByBodyId: function() { return mockFertileCell }
  };

  // mocking cell body
  var mockCellBody = {
    label: 'Circular Body',
    id: 1
  };
  var mockCellPair = {
    bodyA: mockCellBody,
    bodyB: mockCellBody
  };
  var mockCellPairs = [mockCellPair];
  var mockCellEvent = {
    pairs: mockCellPairs,
    source: mockSource
  };

  // mocking boundary body
  var mockBoundaryBody = {
    label: 'Boundary',
  };
  var mockBoundaryPair = {
    bodyA: mockCellBody,
    bodyB: mockBoundaryBody
  };
  var mockBoundaryPairs = [mockBoundaryPair];
  var mockBoundaryEvent = {
    pairs: mockBoundaryPairs,
    source: mockSource
  };

  // mocking infertile cell
  var mockInfertileCell = {
    isFertile: function() { return false },
    updateLastReproduction: function() { return }
  };
  var mockInfertileCellRepository = {
    findCellByBodyId: function() { return mockInfertileCell }
  };

  describe("#action()", function() {

    describe("if both colliders are cells and are fertile", function() {

      beforeEach(function() {
        birthCell = new BirthCell(mockCellFactory, mockFertileCellRepository);
        spyOn(mockFertileCell, 'updateLastReproduction');
        spyOn(mockCellFactory, 'createFromParents');
        birthCell.action(mockCellEvent);
      });

      it("updates parents' last reproduction", function() {
        expect(mockFertileCell.updateLastReproduction).toHaveBeenCalledTimes(2);
      });

      it("calls #createFromParents() on its cell factory", function() {
        expect(mockCellFactory.createFromParents).toHaveBeenCalled();
      });

    });

    describe("if one or more colliders is an infertile cell", function() {

      beforeEach(function() {
        birthCell = new BirthCell(mockCellFactory, mockInfertileCellRepository);
        spyOn(mockInfertileCell, 'updateLastReproduction');
        spyOn(mockCellFactory, 'createFromParents');
        birthCell.action(mockCellEvent);
      });

      it("does not update parents' last reproduction", function() {
        expect(mockInfertileCell.updateLastReproduction).toHaveBeenCalledTimes(0);
      });

      it("does not call #createFromParents() on its cell factory", function() {
        expect(mockCellFactory.createFromParents).toHaveBeenCalledTimes(0);
      });

    });

    describe("if one or more colliders is a boundary", function() {

      beforeEach(function() {
        birthCell = new BirthCell(mockCellFactory, mockFertileCellRepository);
        spyOn(mockFertileCell, 'updateLastReproduction');
        spyOn(mockCellFactory, 'createFromParents');
        birthCell.action(mockBoundaryEvent);
      });

      it("does not update parents' last reproduction", function() {
        expect(mockFertileCell.updateLastReproduction).toHaveBeenCalledTimes(0);
      });

      it("does not call #createFromParents() on its cell factory", function() {
        expect(mockCellFactory.createFromParents).toHaveBeenCalledTimes(0);
      });

    });

  });

});
