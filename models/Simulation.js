'use strict';

(function(exports) {

  function Simulation(
    decoratedEngine,
    decoratedRender,
    worldModule = Matter.World,
    engineModule = Matter.Engine,
    renderModule = Matter.Render
  ) {
    this._decoratedEngine = decoratedEngine;
    this._render = decoratedRender;
    this._worldModule = worldModule;
    this._engineModule = engineModule;
    this._renderModule = renderModule;
  }

  Simulation.prototype.decoratedEngine = function() {
    return this._decoratedEngine;
  };

  Simulation.prototype.render = function() {
    return this._render;
  };

  Simulation.prototype.world = function() {
    return this._decoratedEngine.matterEngine().world;
  };

  Simulation.prototype.addToWorld = function (cell) {
    this._worldModule.add(this.world(), cell.body());
  };

  Simulation.prototype.removeFromWorld = function(cell) {
    this._worldModule.remove(this.world(), cell.body());
  };

  Simulation.prototype.setup = function() {
    this.addWalls();
    this._decoratedEngine.disableGravity();
  };


  Simulation.prototype.addWalls = function() {
    this._worldModule.add(this.world(), [
      Matter.Bodies.rectangle(400, -50, 1200, 100, { isStatic: true }),
      Matter.Bodies.rectangle(850, 300, 100, 600, { isStatic: true }),
      Matter.Bodies.rectangle(400, 650, 1200, 100, { isStatic: true }),
      Matter.Bodies.rectangle(-50, 300, 100, 600, { isStatic: true })
    ]);
    // top, right, bottom, left
  };

  Simulation.prototype.run = function() {
    this._engineModule.run(this._decoratedEngine.matterEngine());
    this._renderModule.run(this._render.matterRender());
  };

  exports.Simulation = Simulation;

})(this);
