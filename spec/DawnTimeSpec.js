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


});
