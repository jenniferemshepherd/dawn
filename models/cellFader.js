'use strict';

(function(exports) {

  function cellFader(cellRepository) {
    this._cellRepository = cellRepository;
  }

  cellFader.prototype.action = function(event) {
    this._cellRepository.store().forEach(function(cell) {
      if (cell.age().value() > 1000) {
        cell.fade();
      }
    }.bind(this));
  };

  exports.cellFader = cellFader;
})(this);
