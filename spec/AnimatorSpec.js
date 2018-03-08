'use strict';

describe("Animator", function() {
  var animator;
  var matterBody = {
    applyForce: function() { return }
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

  var cellRepository = {
    store: function() { return [mockCell, mockCell, mockCell]}
  };

  beforeEach(function() {
    animator = new Animator(matterBody);
  });


  describe("#propel", function() {

    beforeEach(function() {
      spyOn(matterBody, 'applyForce')
    })

    it("applies a force to each cell", function() {
      animator.propel(cellRepository)
      expect(matterBody.applyForce).toHaveBeenCalledTimes(3);
    });
  });
});
