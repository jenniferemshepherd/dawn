'use strict';

(function(exports) {

  function Voice() {
    this._osc = new p5.Oscillator;
  }

  Voice.prototype.start = function() {
    this._osc.start()
  };

  Voice.prototype.osc = function() {
    return this._osc
  };

exports.Voice = Voice;

})(this);
