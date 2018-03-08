'use strict';

(function(exports) {

  function Cell(body, gait) {
    this._body = body;
    this._gait = gait;
  };

  Cell.prototype.body = function() {
    return this._body;
  };

  Cell.prototype.gait = function() {
    return this._gait;
  };

  exports.Cell = Cell;

})(this);
