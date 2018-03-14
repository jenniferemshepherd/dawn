'use strict';

describe("DawnTime", function() {
  var dawnTime;
  var mockTimeScale;
  var mockTiming = {
    mockTimeScale: function() { return mockTimeScale }
  };
  var mockEngine = {
    matterEngine: function() { return mockTiming }
  };

  beforeEach(function() {
    dawnTime = new DawnTime(mockEngine);
  });

  it("has a an engine", function() {
    expect(this._decoratedEngine).toEqual(mockEngine)
  });

  describe("#speed", function() {
    it("can be set with a speed of 0", function() {
      expect(dawnTime.speed(0)).toEqual(0)
    });
  });

});
