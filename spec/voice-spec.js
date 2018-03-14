'use strict';

describe("Voice", function() {
  var voice;
  var mockOsc;

  beforeEach(function() {
    voice = new Voice();
  });

  it("is initiated with an oscillator", function() {
    expect(voice.osc()).toEqual(mockOsc);
  });

});
