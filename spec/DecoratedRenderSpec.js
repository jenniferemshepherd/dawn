'use strict';

describe("DecoratedRender", function() {
  var decoratedRender;
  var matterRender = {}

  beforeEach(function() {
    decoratedRender = new DecoratedRender()
  });

  describe("#createRender", function() {

    it("creates a value for the property _matterRender", function() {
      decoratedRender.createRender()
      expect(decoratedRender.matterRender()).not.toEqual(null)
    });

  });

});
