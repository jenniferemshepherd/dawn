'use strict';

(function(exports) {

  function KillCells(cellRepository, simulation, deathAge = 45000) {
    this._cellRepository = cellRepository;
    this._simulation = simulation;
    this._deathAge = deathAge;
  }

  KillCells.prototype.action = function(event) {
    this._cellRepository.store().forEach(function(cell) {
      if (this._isCellDying(cell, event)) {
        this._simulation.removeFromWorld(cell);
        this._cellRepository.remove(cell);
      };
    }.bind(this));
  };

  KillCells.prototype._isCellDying = function (cell, event) {
    return cell.age().value(event.timestamp) > this._deathAge;
  };

  exports.KillCells = KillCells;
})(this);
