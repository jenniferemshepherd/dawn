'use strict';

const ADULTHOOD_AGE = 10000;
const DORMANCY_PERIOD = 7500;
const ELDERLY_AGE = 40000;

function Cell(body, gait, age, voice) {
  this._body = body;
  this._gait = gait;
  this._age = age;
  this._voice = voice;
  this._lastReproduction = 0;
}

Cell.prototype.body = function() {
  return this._body;
};

Cell.prototype.gait = function() {
  return this._gait;
};

Cell.prototype.age = function() {
  return this._age;
};

Cell.prototype.voice = function() {
  return this._voice;
};

Cell.prototype.lastReproduction = function () {
  return this._lastReproduction;
};

Cell.prototype.updateLastReproduction = function (time) {
  this._lastReproduction = time;
};

Cell.prototype.isFertile = function (time) {
  return (this._isAdult(time) && this._isPostnatal(time) && !this._isElderly(time));
};

Cell.prototype._isAdult = function (time) {
  return this._age.value(time) > ADULTHOOD_AGE;
};

Cell.prototype._isPostnatal = function (time) {
  return time > this._lastReproduction + DORMANCY_PERIOD;
};

Cell.prototype._isElderly = function (time) {
  return this._age.value(time) > ELDERLY_AGE;
};

Cell.prototype.fade = function() {
  this._body.render.opacity *= 0.992
};

module.exports = Cell;
