'use strict';

(function(exports) {

  function CellFactory() {
  };

  CellFactory.prototype.create = function(cellRepository) {
    var cell = new Cell(Matter.Bodies.circle(150, 200, 10), new Gait());
    cellRepository.add(cell);
    return cell;
  };

  exports.CellFactory = CellFactory;

})(this);
