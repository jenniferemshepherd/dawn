'use strict';

describe("Grow", function() {
  var grow;
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
    grow = new Grow(mockCellRepository, mockBodyModule);
  });

  describe("#action", function() {

    beforeEach(function() {
      spyOn(mockBodyModule, 'scale')
      grow.action();
    })

    it("increases cell size over time", function() {
      expect(mockBodyModule.scale).toHaveBeenCalledTimes(3);
    });

  });

});
