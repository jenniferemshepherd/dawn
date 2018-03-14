'use strict';

(function(exports) {

  function CellFader(cellRepository) {
    this._cellRepository = cellRepository;
  }

  CellFader.prototype.action = function(event) {
    this._cellRepository.store().forEach(function(cell) {
      if (cell.age().value(event.timestamp) > 18000) {
        cell.fade();
      }
    });
  };

  exports.CellFader = CellFader;
})(this);
