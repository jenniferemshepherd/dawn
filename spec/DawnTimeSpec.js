'use strict';

describe("DawnTime", function() {
  var dawnTime;
  var mockEngine;

  beforeEach(function() {
    dawnTime = new DawnTime(mockEngine);
  });

  it("has a an engine", function() {
    expect(this._decoratedEngine).toEqual(mockEngine)
  });

  it("has an initial speed of 0", function() {
    expect(dawnTime.speed()).toEqual(0)
  });


});
