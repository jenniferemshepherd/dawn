'use strict';

(function(exports) {

  function CellFactory(simulation) {
    this.simulation = simulation
    this.timeArray = [0]
  };

  CellFactory.prototype.create = function(cellRepository) {
    var cell = new Cell(Matter.Bodies.circle(150, 200, 10), new Gait());
    cellRepository.add(cell);
    this.simulation.addToWorld(cell);
    return cell;
  };

  CellFactory.prototype.action = function (cellRepository, event) {
    var time = event.source.timing.timestamp;
    if (this.isCompatible(event) && this.isFertile(time)) {
      this.create(cellRepository);
      this.timeArray.push(time);
    }
  };

  CellFactory.prototype.methodName = function () {

  };

  CellFactory.prototype.isFertile = function (time) {
    return (time > this.timeArray[this.timeArray.length - 1] + 1000)
  };

  CellFactory.prototype.isCompatible = function (event) {
    return (event.pairs[0].bodyA.label !== 'Rectangle Body' && event.pairs[0].bodyB.label !== 'Rectangle Body')
  };

  exports.CellFactory = CellFactory;

})(this);
