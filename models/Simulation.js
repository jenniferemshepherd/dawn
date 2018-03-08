'use strict';

(function(exports) {

  function Simulation(engine, render, worldModule) {
    this._engine = engine;
    this._render = render;
    this._worldModule = worldModule;
  };

  Simulation.prototype.engine = function() {
    return this._engine;
  };

  Simulation.prototype.render = function() {
    return this._render;
  };

  Simulation.prototype.world = function() {
    return this._engine.world;
  };

  Simulation.prototype.addToWorld = function (cell) {
    this._worldModule.add(this.world(), cell.body())
  };

  Simulation.prototype.addWalls = function() {
    this._worldModule.add(this.world(), [Matter.Bodies.rectangle(400, -50, 1200, 100, { isStatic: true }),
                                         Matter.Bodies.rectangle(850, 300, 100, 600, { isStatic: true }),
                                         Matter.Bodies.rectangle(400, 650, 1200, 100, { isStatic: true }),
                                         Matter.Bodies.rectangle(-50, 300, 100, 600, { isStatic: true })]);
    // top, right, bottom, left
  };

  exports.Simulation = Simulation;

})(this);
