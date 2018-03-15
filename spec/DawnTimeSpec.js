'use strict';

describe("DawnTime", function() {
  var dawnTime;
  var mockTimeScale;
  var mockTiming = {
    mockTimeScale: function() { return mockTimeScale }
  };
  var mockDecoratedEngine = {
    matterEngine: function() { return mockTiming }
  };

  beforeEach(function() {
    dawnTime = new DawnTime(mockDecoratedEngine);
  });

  it("has an engine", function() {
    expect(dawnTime._decoratedEngine).toEqual(mockDecoratedEngine)
  });

  describe("#speed", function() {
    it("can be set with a speed of 0", function() {
      expect(dawnTime.speed(0)).toEqual(0)
    });
  });

});
