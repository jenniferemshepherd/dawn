'use strict';

function Voice(notes) {
  this._noteArray = [830.609, 932.328, 1046.50, 1108.73, 1244.51, 1396.91, 1567.98, 1661.22, 1864.656, 2093, 2217.46, 2489.02]
  this._osc = new p5.Oscillator;
  this._attackLevel = .2;
  this._releaseLevel = 0;
  this._attackTime = 0.001
  this._decayTime = 0.2;
  this._susPercent = .4;
  this._releaseTime = 1.;
}

Voice.prototype.playEnv = function() {
  var env = new p5.Env();
  env.setADSR(this._attackTime, this._decayTime, this._susPercent, this._releaseTime);
  env.setRange(this._attackLevel, this._releaseLevel);
  this._osc.amp(env)
  this._osc.start()
  this._osc.freq(this.note())
  env.play();
};

Voice.prototype.note = function() {
  return this._noteArray[Math.floor(Math.random() * this._noteArray.length)];
};

module.exports = Voice;
