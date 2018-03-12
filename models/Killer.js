'use strict';

(function(exports) {

  function Killer(cellRepository, simulation) {
    this._cellRepository = cellRepository;
    this._simulation = simulation;
  }

  Killer.prototype.action = function(event) {
    this._cellRepository.store().forEach(function(cell) {
      if (cell.age().value() > 500) {
        this._simulation.removeFromWorld(cell);
      };
    }.bind(this));
  };

  exports.Killer = Killer;
})(this);
