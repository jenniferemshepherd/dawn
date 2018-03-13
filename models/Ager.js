'use strict';

(function(exports) {

  function Ager(cellRepository) {
    this._cellRepository = cellRepository;
  }

  Ager.prototype.action = function(event) {
    this._cellRepository.store().forEach(function(cell) {
      cell.age().increment();
      // if (cell.age().value() > 1000) {
      //   cell._body.render.opacity *= 0.992
      // }
    }.bind(this));
  };

  exports.Ager = Ager;
})(this);
