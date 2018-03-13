'use strict';

describe("Time", function() {
  var time;
  var mockEngine;

  beforeEach(function() {
    time = new Time(mockEngine);
  });

  it("has a decoratedEngine", function() {
    expect(this._decoratedEngine).toEqual(mockEngine)
  });

});
