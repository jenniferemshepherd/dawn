'use strict';

(function(exports) {

  function cellFader(cellRepository) {
    this._cellRepository = cellRepository;
  }

  cellFader.prototype.action = function(event) {
    this._cellRepository.store().forEach(function(cell) {
      if (cell.age().value() > 1000) {
        cell._body.render.opacity *= 0.992
      }
    }.bind(this));
  };

  exports.cellFader = cellFader;
})(this);
