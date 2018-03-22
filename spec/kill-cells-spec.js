'use strict';

describe("KillCells", function() {
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

  describe("#action", function() {

    it("does not kill young cells", function() {
      killCells = new KillCells(mockYoungCellRepository, mockSimulation);
      killCells.action(mockEvent);
      expect(mockSimulation.removeFromWorld).toHaveBeenCalledTimes(0);
    });

    it("kills old cells", function() {
      killCells = new KillCells(mockOldCellRepository, mockSimulation);
      killCells.action(mockEvent);
      expect(mockSimulation.removeFromWorld).toHaveBeenCalledTimes(1);
    });

  });

});
