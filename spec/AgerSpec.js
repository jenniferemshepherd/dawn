'use strict';

describe("Ager", function() {
  var ager;
  var mockAge = {
    increment: function() { return }
  };

  var mockCell = {
    body: function() { return }
  };

  var mockCellRepository = {
    store: function() { return [mockCell, mockCell, mockCell] }
  };

  beforeEach(function() {
    ager = new Ager(mockCellRepository);
  });

  describe("#action", function() {
    it("increases cell age over time", function() {
      expect(mockAge.increment()).toHaveBeenCalledTimes(3);
    });

  });

});
