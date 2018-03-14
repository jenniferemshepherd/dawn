'use strict';

(function(exports) {

  function Voice(notes) {
    this._notes = notes
    this._note = this._notes.choose()
    this._osc = new p5.Oscillator;
    this._attackLevel = 1.0;
    this._releaseLevel = 0;
    this._attackTime = 0.001
    this._decayTime = 0.2;
    this._susPercent = 0.2;
    this._releaseTime = 0.5;
  };

  Voice.prototype.osc = function() {
    return this._osc
  };

  Voice.prototype.start = function() {
    this._osc.start()
  };

  Voice.prototype.playEnv = function() {
    var env = new p5.Env();
    env.setADSR(this._attackTime, this._decayTime, this._susPercent, this._releaseTime);
    env.setRange(this._attackLevel, this._releaseLevel);
    this._osc.amp(env)
    this._osc.start()
    this._osc.freq(this._note)
    env.play();
  };

exports.Voice = Voice;

})(this);
