'use strict';

(function(exports) {

  function CellFactory(simulation) {
    this.simulation = simulation
  };

  CellFactory.prototype.create = function(cellRepository) {
    var cell = new Cell(Matter.Bodies.circle(150, 200, 10), new Gait());
    cellRepository.add(cell);
    this.simulation.addToWorld(cell);
    return cell;
  };

  exports.CellFactory = CellFactory;

})(this);
