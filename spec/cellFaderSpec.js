'use strict';

describe("cellFader", function() {
  var cellFader;

  // var mockRender = {
  //   opacity: function() { return }
  // };

  var mockAge = {
    value: function() { return 1200 }
  };

  var mockCell = {
    // body: function() { return mockRender},
    age: function() { return mockAge },
    fade: function() { return }
  };

  var mockCellRepository = {
    store: function() { return [mockCell, mockCell, mockCell] }
  };

  beforeEach(function() {
    spyOn(mockCell, 'fade')
    cellFader = new cellFader(mockCellRepository);
  });

  describe("#action", function() {
    it("fades cells after a certain time", function() {
      cellFader.action();
      expect(mockCell.fade).toHaveBeenCalledTimes(3);
    });

  });

});
