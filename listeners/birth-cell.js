'use strict';

function BirthCell(cellFactory, cellRepository) {
  this._cellFactory = cellFactory;
  this._cellRepository = cellRepository;
}

BirthCell.prototype.action = function (event) {
  var bodyA = event.pairs[0].bodyA;
  var bodyB = event.pairs[0].bodyB;
  var collisionTime = event.source.timing.timestamp;
  if (this._reproductionShouldHappen(bodyA, bodyB, collisionTime)) {
    this._updateParentsLastReproduction(bodyA, bodyB, collisionTime);
    this._cellFactory.createFromParents(this._parent(bodyA), this._parent(bodyB), collisionTime);
  };
};

BirthCell.prototype._reproductionShouldHappen = function (bodyA, bodyB, collisionTime) {
  return this._isTwoCells(bodyA, bodyB) && this._cellsAreFertile(bodyA, bodyB, collisionTime);
};

BirthCell.prototype._isTwoCells = function (bodyA, bodyB) {
  return !(this._isBoundary(bodyA) || this._isBoundary(bodyB));
};

BirthCell.prototype._isBoundary = function (body) {
  return body.label === 'Boundary';
};

BirthCell.prototype._cellsAreFertile = function (bodyA, bodyB, time) {
  return this._parent(bodyA).isFertile(time) && this._parent(bodyB).isFertile(time);
};

BirthCell.prototype._parent = function (body) {
  return this._cellRepository.findCellByBodyId(body.id);
};

BirthCell.prototype._updateParentsLastReproduction = function (bodyA, bodyB, collisionTime) {
  this._parent(bodyA).updateLastReproduction(collisionTime);
  this._parent(bodyB).updateLastReproduction(collisionTime);
};

module.exports = BirthCell;
