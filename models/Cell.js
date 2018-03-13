'use strict';

(function(exports) {

  const ADULTHOOD_AGE = 5000;
  const DORMANCY_PERIOD = 5000;

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

  Cell.prototype.updateLastReproduction = function (time) {
    this._lastReproduction = time;
  };

  Cell.prototype.isFertile = function (time) {
    return this._isAdult(time) && this._isPostnatal(time);
  };

  Cell.prototype._isAdult = function (time) {
    return this._age.value(time) > 5000;
  };

  Cell.prototype._isPostnatal = function (time) {
    return time > this._lastReproduction + DORMANCY_PERIOD;
  };

  exports.Cell = Cell;

})(this);
