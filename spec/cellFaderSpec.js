'use strict';

describe("cellFader", function() {
  var cellFader;

  var mockAge = {
    value: function() { return 30000 }
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
    cellFader = new CellFader(mockCellRepository);
  });

  describe("#action", function() {
    it("fades cells after a certain time", function() {
      cellFader.action(mockEvent);
      expect(mockCell.fade).toHaveBeenCalledTimes(3);
    });

  });

});
