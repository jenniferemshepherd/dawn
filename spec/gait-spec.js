'use strict';

var Gait = require('../properties/gait');

describe("Gait", function() {
  var gait;

  beforeEach(function() {
    gait = new Gait();
  });

  describe("#calculate", function() {
    it("returns a number", function() {
      expect(gait.calculate()).toEqual(jasmine.any(Number));
    });
  });
});
