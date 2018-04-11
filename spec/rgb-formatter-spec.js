'use strict';

const RgbFormatter = require('../services/rgb-formatter');

describe("RgbFormatter", function() {

  var body = {
    render: {
      fillStyle: 'rgb(100, 55, 66)'
    }
  };

  var parent = {
    body: function() { return body }
  };

  describe("#albinoString", function() {

    it("returns a white rgb string", function() {
      var rgbFormatter = new RgbFormatter();
      expect(rgbFormatter.albinoString()).toEqual('rgb(255, 255, 255)')
    });

  });

  describe("#formatRgbString", function() {

    it("returns an array of numbers from an rgb string", function() {
      var rgbFormatter = new RgbFormatter();
      expect(rgbFormatter.formatRgbString(parent)).toEqual([100, 55, 66])
    });

  });

  describe("#convertToRgbString", function() {

    it("joins an array of three numbers to create an rgb string", function() {
      var rgbFormatter = new RgbFormatter();
      expect(rgbFormatter.convertToRgbString([100, 55, 66])).toEqual('rgb(100, 55, 66)')
    });

  });

});
