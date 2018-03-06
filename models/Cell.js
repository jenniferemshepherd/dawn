'use strict';

(function(exports) {

  function Cell(x, y) {
    this._x = x;
    this._y = y;
  };

  Cell.prototype.x = function(){
    return this._x;
  };

  Cell.prototype.y = function(){
    return this._y;
  };

exports.Cell = Cell;

})(this)
