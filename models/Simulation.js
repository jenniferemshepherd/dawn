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

  exports.Simulation = Simulation;

})(this);
