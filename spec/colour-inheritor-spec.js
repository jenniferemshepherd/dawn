'use strict';

describe("ColourInheritor", function() {

  var parent = {}

  describe("#colourMixer", function() {

    it('returns a white rgb string if isMutation() is true twice', function() {
      var colourInheritor = new ColourInheritor(parent, parent);
      spyOn(colourInheritor, '_isMutation').and.returnValue(true);
      expect(colourInheritor.colourMixer()).toEqual('rgb(255, 255, 255)')
    });

  });

});
