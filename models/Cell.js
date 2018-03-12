'use strict';

(function(exports) {

  function Cell(body, gait, age) {
    this._body = body;
    this._gait = gait;
    this._age = age;
  };

  Cell.prototype.body = function() {
    return this._body;
  };

  Cell.prototype.gait = function() {
    return this._gait;
  };

  Cell.prototype.age = function() {
    return this._age;
  };

  exports.Cell = Cell;

})(this);
