'use strict';

(function(exports) {

  const ADULTHOOD_AGE = 5000;
  const DORMANCY_PERIOD = 2500;
  const ELDERLY_AGE = 20000;

  function Cell(body, gait, age) {
    this._body = body;
    this._gait = gait;
    this._age = age;
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

  exports.Cell = Cell;

})(this);
