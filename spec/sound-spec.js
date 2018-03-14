'use strict';

describe("Sound", function() {

  beforeEach(function() {
    sound = new Sound;
  });

  it("is initiated with an oscillator", function() {
    expect(sound.oscillator()).toExist;
  });

});
