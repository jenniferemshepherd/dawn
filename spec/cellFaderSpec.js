'use strict';

describe("cellFader", function() {
  var cellFader;
  var mockRender = {
    opacity: function() { return }
  };

  var mockCell = {
    body: function() { return mockRender},
    age: function() { return 1200 }
  };

  var mockCellRepository = {
    store: function() { return [mockCell, mockCell, mockCell] }
  };

  beforeEach(function() {
    spyOn(mockCell, 'body')
    cellFader = new cellFader(mockCellRepository);
  });

  describe("#action", function() {
    it("fades cells after a certain time", function() {
      cellFader.action();
      expect(body.render.opacity).toHaveBeenCalledTimes(3);
    });



  });

});
