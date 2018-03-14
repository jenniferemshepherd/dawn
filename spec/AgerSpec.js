'use strict';

describe("Ager", function() {
  var ager;
  var mockAge = {
    increment: function() { return }
  };

  var mockCell = {
    age: function() { return mockAge }
  };

  var mockCellRepository = {
    store: function() { return [mockCell, mockCell, mockCell] }
  };

  beforeEach(function() {
    spyOn(mockAge, 'increment')
    ager = new Ager(mockCellRepository);
  });

  describe("#action", function() {
    it("increases cell age over time", function() {
      ager.action();
      expect(mockAge.increment).toHaveBeenCalledTimes(3);
    });

  });

});