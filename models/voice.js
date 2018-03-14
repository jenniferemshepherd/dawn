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

  Voice.prototype.envelope = function() {
    var attackLevel = 1.0;
    var releaseLevel = 0;
    var attackTime = 0.1
    var decayTime = 0.2;
    var susPercent = 0.2;
    var releaseTime = 0.5;
    env = new p5.Env();
    env.setADSR(attackTime, decayTime, susPercent, releaseTime);
    env.setRange(attackLevel, releaseLevel);
  };


exports.Voice = Voice;

})(this);
