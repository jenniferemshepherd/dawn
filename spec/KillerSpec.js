'use strict';

describe("Killer", function() {
  var killer;
  var mockkiller;

  var mockSimulation = {
    removeFromWorld: function() { return }
  };

  var mockOldSimulation = {
    removeFromWorld: function() { return }
  };

  var mockAge = {
    value: function() { return 1499 }
  };

  var mockCell = {
    age: function() { return mockAge }
  };

  var mockCellRepository = {
    store: function() { return [mockCell] },
    remove: function() { return }
  };

  var mockOldAge = {
    value: function() { return 1505 }
  };

  var mockOldCell = {
    age: function() { return mockOldAge }
  };

  var mockOldCellRepository = {
    store: function() { return [mockOldCell] },
    remove: function() { return }
  };

  beforeEach(function() {
    spyOn(mockSimulation, 'removeFromWorld')
    spyOn(mockOldSimulation, 'removeFromWorld')
  });

  describe("#kill", function() {
    it("does not kill cell if younger than 1500", function() {
      killer = new Killer(mockCellRepository, mockSimulation);
      killer.action();
      expect(mockSimulation.removeFromWorld).toHaveBeenCalledTimes(0);
    });

    it("kills cell if older than 1500", function() {
      mockkiller = new Killer(mockOldCellRepository, mockOldSimulation);
      mockkiller.action();
      expect(mockOldSimulation.removeFromWorld).toHaveBeenCalledTimes(1);
    });
  });
});
