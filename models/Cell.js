'use strict';

(function(exports) {

  function Cell(body, gait, age) {
    this._body = body;
    this._gait = gait;
    this._age = age;
    this._fertility = false;
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

  Cell.prototype.fertility = function () {
    return this._fertility;
  };

  Cell.prototype.makeFertile = function () {
    this._fertility = true;
  };

  Cell.prototype.makeInfertile = function () {
    this._fertility = false;
  };

  Cell.prototype.fade = function() {
    this._body.render.opacity *= 0.992
  };

  exports.Cell = Cell;

})(this);
