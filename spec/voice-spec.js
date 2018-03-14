'use strict';

describe("Voice", function() {
  var voice;

  beforeEach(function() {
    voice = new Voice();
  });

  it("is initiated with an oscillator", function() {
    expect(voice.oscillator()).toEqual('sine');
  });

});
