'use strict';

describe("Killer", function() {
  var killCells;

  var mockSimulation = {
    removeFromWorld: function() { return }
  };

  var mockYoungAge = {
    value: function() { return 5000 }
  };

  var mockOldAge = {
    value: function() { return 50000 }
  };

  var mockYoungCell = {
    age: function() { return mockYoungAge }
  };

  var mockOldCell = {
    age: function() { return mockOldAge }
  };

  var mockYoungCellRepository = {
    store: function() { return [mockYoungCell] },
    remove: function() { return }
  };

  var mockOldCellRepository = {
    store: function() { return [mockOldCell] },
    remove: function() { return }
  };

  var mockEvent = {
    timestamp: 2000
  };

  beforeEach(function() {
    spyOn(mockSimulation, 'removeFromWorld')
  });

  describe("#kill", function() {

    it("does not kill cell if younger than 1500", function() {
      killCells = new KillCells(mockYoungCellRepository, mockSimulation);
      killCells.action(mockEvent);
      expect(mockSimulation.removeFromWorld).toHaveBeenCalledTimes(0);
    });

    it("kills cell if older than 1500", function() {
      killCells = new KillCells(mockOldCellRepository, mockSimulation);
      killCells.action(mockEvent);
      expect(mockSimulation.removeFromWorld).toHaveBeenCalledTimes(1);
    });

  });

});
