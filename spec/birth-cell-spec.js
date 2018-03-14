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

  // mocking bodies for a reproductive event
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

      it("calls #create() on its cell factory", function() {
        expect(mockCellFactory.createFromParents).toHaveBeenCalled();
      });

    });

  })
});
