'use strict';

describe("Time", function() {
  var time;
  var mockEngine;

  beforeEach(function() {
    time = new Time(mockEngine);
  });

  it("has a an engine", function() {
    expect(this._decoratedEngine).toEqual(mockEngine)
  });

  describe('#stopTime', function() {
    it("sets time to 0", function() {
      Time.stop();
      expect(engine.matterEngine().world.gravity.y).toEqual(0);
    });
  });

});
