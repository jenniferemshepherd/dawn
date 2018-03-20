'use strict';

(function(exports) {

  function GrowCells(cellRepository, bodyModule = Matter.Body) {
    this._cellRepository = cellRepository;
    this._bodyModule = bodyModule;
  }

  GrowCells.prototype.action = function(event) {
    this._cellRepository.store().forEach(function(cell) {
      this._bodyModule.scale(cell.body(), 1.00015, 1.00015);
    }.bind(this));
  };

  exports.GrowCells = GrowCells;
})(this);
