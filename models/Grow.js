'use strict';

(function(exports) {

  function Grow(cellRepository, bodyModule = Matter.Body) {
    this._cellRepository = cellRepository;
    this._bodyModule = bodyModule;
  }

  Grow.prototype.action = function(event) {
    this._cellRepository.store().forEach(function(cell) {
      this._bodyModule.scale(cell.body(), 1.0001, 1.0001);
    }.bind(this));
  };

  exports.Grow = Grow;
})(this);
