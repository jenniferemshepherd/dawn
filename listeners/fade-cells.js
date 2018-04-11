'use strict';

function FadeCells(cellRepository) {
  this._cellRepository = cellRepository;
}

FadeCells.prototype.action = function(event) {
  this._cellRepository.store().forEach(function(cell) {
    if (cell.age().value(event.timestamp) > 40000) {
      cell.fade();
    };
  });
};

module.exports = FadeCells;
