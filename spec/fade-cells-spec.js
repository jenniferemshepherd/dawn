'use strict';

describe("FadeCells", function() {
  var fadeCells;

  var mockAge = {
    value: function() { return 100000 }
  };

  var mockCell = {
    age: function() { return mockAge },
    fade: function() { return }
  };

  var mockEvent = {
    timestamp: 25000
  }

  var mockCellRepository = {
    store: function() { return [mockCell, mockCell, mockCell] }
  };

  beforeEach(function() {
    spyOn(mockCell, 'fade')
    fadeCells = new FadeCells(mockCellRepository);
  });

  describe("#action", function() {
    it("fades cells after a certain time", function() {
      fadeCells.action(mockEvent);
      expect(mockCell.fade).toHaveBeenCalledTimes(3);
    });

  });

});
