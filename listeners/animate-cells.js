'use strict';

function AnimateCells(cellRepository, bodyModule = Matter.Body, vectorModule = Matter.Vector) {
  this._cellRepository = cellRepository;
  this._bodyModule = bodyModule;
  this._vectorModule = vectorModule;
}

AnimateCells.prototype.action = function(event) {
  this._cellRepository.store().forEach(function(cell) {
    var force1 = this._vectorModule.create(cell.gait().calculate(), cell.gait().calculate());
    this._bodyModule.applyForce(cell.body(), cell.body().position, force1);
  }.bind(this));
};

module.exports = AnimateCells;
