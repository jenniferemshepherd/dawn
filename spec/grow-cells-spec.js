'use strict';

describe("GrowCells", function() {
  var growCells;
  var mockBodyModule = {
    scale: function() { return }
  };

  var mockBody = {
    position: ""
  };

  var mockCell = {
    body: function() { return mockBody }
  };

  var mockCellRepository = {
    store: function() { return [mockCell, mockCell, mockCell]}
  };

  beforeEach(function() {
    growCells = new GrowCells(mockCellRepository, mockBodyModule);
  });

  describe("#action", function() {

    beforeEach(function() {
      spyOn(mockBodyModule, 'scale')
      growCells.action();
    })

    it("increases cell size over time", function() {
      expect(mockBodyModule.scale).toHaveBeenCalledTimes(3);
    });

  });

});
