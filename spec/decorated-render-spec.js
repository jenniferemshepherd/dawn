'use strict';

const DecoratedRender = require('../decorators/decorated-render');

describe("DecoratedRender", function() {
  var decoratedRender;
  var matterRender = {
    create: function() { return }
  };
  var mockDocument = {
    getElementById: function() { return }
  };

  beforeEach(function() {
    decoratedRender = new DecoratedRender(matterRender, mockDocument);
  });

  describe("#createRender", function() {

    it("creates a value for the property _matterRender", function() {
      decoratedRender.createRender()
      expect(decoratedRender.matterRender()).not.toEqual(null)
    });

  });

});
