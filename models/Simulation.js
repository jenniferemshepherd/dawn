'use strict';

(function(exports) {

  function Simulation(engine, render, worldModule, eventsModule, bodyModule) {
    this._engine = engine;
    this._render = render;
    this._worldModule = worldModule;
    this._eventsModule = eventsModule;
    this._bodyModule = bodyModule;
    // this._animator = animator;
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

  Simulation.prototype.listenForUpdate = function () {
    this._eventsModule.on(this._engine, 'afterUpdate', function(event) {
      this.world.bodies.forEach(function(cellBody) {
        var force1 = Matter.Vector.create(0.005 * (0.5 -  Math.random()), 0.005 * (0.5 - Math.random()));
        Matter.Body.applyForce(cellBody, cellBody.position, force1);
      });
    });
  };

  exports.Simulation = Simulation;

})(this);
