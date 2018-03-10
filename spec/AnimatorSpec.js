'use strict';

describe("Animator", function() {
  var animator;
  var mockBodyModule = {
    applyForce: function() { return }
  };

  var mockVectorModule = {
    create: function() { return }
  };

  var mockGait = {
    calculate: function() { return }
  };

  var mockBody = {
    position: ""
  };

  var mockCell = {
    body: function() { return mockBody },
    gait: function() { return mockGait }
  };

  var mockCellRepository = {
    store: function() { return [mockCell, mockCell, mockCell]}
  };

  beforeEach(function() {
    animator = new Animator(mockCellRepository, mockBodyModule, mockVectorModule);
  });

  describe("#action", function() {

    beforeEach(function() {
      spyOn(mockBodyModule, 'applyForce')
      animator.action();
    })

    it("applies a force to each cell", function() {
      expect(mockBodyModule.applyForce).toHaveBeenCalledTimes(3);
    });

  });

});
