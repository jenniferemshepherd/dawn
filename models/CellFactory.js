'use strict';

(function(exports) {

  function CellFactory(simulation, cellRepository) {
    this._simulation = simulation;
    this._cellRepository = cellRepository;
    this._timeArray = [0];
    this._parents = [];
  }

  CellFactory.prototype.create = function() {
    var cell = new Cell(Matter.Bodies.circle(150, 200, 30), new Gait());
    this._cellRepository.add(cell);
    this._simulation.addToWorld(cell);
    return cell;
  };

  CellFactory.prototype.action = function (event) {
    var time = event.source.timing.timestamp;
    if (this._isMating(time, event)) {
      this._parents.push(event.pairs[0].bodyA.id);
      this._parents.push(event.pairs[0].bodyB.id);
      console.log(this._parents)
      this.create();
      this._timeArray.push(time);
    };
  };

  CellFactory.prototype._isMating = function (time, event) {
    return (this._isFertile(time) && this._isCompatible(event));
  };

  CellFactory.prototype._isFertile = function (time) {
    return (time > this._timeArray[this._timeArray.length - 1] + 1000)
  };

  CellFactory.prototype._isCompatible = function (event) {
    return (event.pairs[0].bodyA.label !== 'Rectangle Body' && event.pairs[0].bodyB.label !== 'Rectangle Body')
  };

  exports.CellFactory = CellFactory;

})(this);
