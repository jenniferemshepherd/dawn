'use strict';

(function(exports) {

  function Cell(body) {
    this._body = body;
  };

  Cell.prototype.body = function() {
    return this._body;
  };

  exports.Cell = Cell;

})(this);
