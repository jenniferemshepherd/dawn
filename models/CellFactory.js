'use strict';

(function(exports) {

  function CellFactory(simulation) {
    this.simulation = simulation
    this.timeArray = [0]
  };

  CellFactory.prototype.create = function(cellRepository) {
    var cell = new Cell(Matter.Bodies.circle(150, 200, 30), new Gait());
    cellRepository.add(cell);
    this.simulation.addToWorld(cell);
    return cell;
  };

  CellFactory.prototype.action = function (cellRepository, event) {
    var time = event.source.timing.timestamp;
    if (this._isMating(time, event)) {
      this.create(cellRepository);
      this.timeArray.push(time);
    }
  };

  CellFactory.prototype._isMating = function (time, event) {
    return (this.isFertile(time) && this.isCompatible(event));
  };

  CellFactory.prototype._isFertile = function (time) {
    return (time > this.timeArray[this.timeArray.length - 1] + 1000)
  };

  CellFactory.prototype._isCompatible = function (event) {
    return (event.pairs[0].bodyA.label !== 'Rectangle Body' && event.pairs[0].bodyB.label !== 'Rectangle Body')
  };

  exports.CellFactory = CellFactory;

})(this);
