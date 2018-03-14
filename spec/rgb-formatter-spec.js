'use strict';

describe("RgbFormatter", function() {

  beforeEach(function() {
    rgbFormatter = new RgbFormatter();
  });

  describe("#albinoString", function() {

    it("returns a white rgb string", function() {
      expect(rgbFormatter.albinoString()).toEqual('rgb(255, 255, 255)')
    });

  });

});
