'use strict';

(function(exports) {

  function Simulation(engine, render, world) {
    this._engine = engine;
    this._render = render;
    this._world = world;
  };

  Simulation.prototype.engine = function() {
    return this._engine;
  };

  Simulation.prototype.render = function() {
    return this._render;
  };

  Simulation.prototype.world = function() {
    return this._world;
  };

  exports.Simulation = Simulation;

})(this);
