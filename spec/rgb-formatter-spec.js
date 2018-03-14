'use strict';

describe("RgbFormatter", function() {

  var render = {
    fillStyle: 'rgb(100, 55, 66)'
  }

  var parent = {
    body: function() { return render }
  };

  beforeEach(function() {
    rgbFormatter = new RgbFormatter();
  });

  describe("#albinoString", function() {

    it("returns a white rgb string", function() {
      expect(rgbFormatter.albinoString()).toEqual('rgb(255, 255, 255)')
    });

  });

  describe("#formatRgbString", function() {

    it("returns an array of numbers from an rgb string", function() {
      expect(rgbFormatter.formatRgbString(parent)).toEqual([100, 55, 66])
    });

  });

});
