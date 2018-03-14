'use strict';

(function(exports) {

  function Voice() {
    this._osc = new p5.Oscillator
  }

  Voice.prototype.oscillator = function() {
    this._osc.start()
  };


exports.Voice = Voice;

})(this);
