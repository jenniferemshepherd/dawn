'use strict';

describe("DecoratedRender", function() {
  var decoratedRender;
  var matterRender = {}

  beforeEach(function() {
    decoratedRender = new DecoratedRender(matterRender)
  });

  it("stores an instance of matterRender", function() {
    expect(decoratedRender.matterRender()).toEqual(matterRender)
  });
});
