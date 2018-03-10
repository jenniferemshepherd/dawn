'use strict';

(function(exports) {

  function Simulation(
    decoratedEngine,
    renderer,
    worldModule = Matter.World,
    engineModule = Matter.Engine,
    renderModule = Matter.Render
  ) {
    this._decoratedEngine = decoratedEngine;
    this._renderer = renderer;
    this._worldModule = worldModule;
    this._engineModule = engineModule;
    this._renderModule = renderModule;
  };

  Simulation.prototype.decoratedEngine = function() {
    return this._decoratedEngine;
  };

  Simulation.prototype.renderer = function() {
    return this._renderer;
  };

  Simulation.prototype.world = function() {
    return this._decoratedEngine.matterEngine().world;
  };

  Simulation.prototype.addToWorld = function (cell) {
    this._worldModule.add(this.world(), cell.body())
  };

  Simulation.prototype.setup = function() {
    this.addWalls();
    this._decoratedEngine.disableGravity();
  };


  Simulation.prototype.addWalls = function() {
    this._worldModule.add(this.world(), [Matter.Bodies.rectangle(400, -50, 1200, 100, { isStatic: true }),
                                         Matter.Bodies.rectangle(850, 300, 100, 600, { isStatic: true }),
                                         Matter.Bodies.rectangle(400, 650, 1200, 100, { isStatic: true }),
                                         Matter.Bodies.rectangle(-50, 300, 100, 600, { isStatic: true })]);
    // top, right, bottom, left
  };

  Simulation.prototype.run = function() {
    this._engineModule.run(this._decoratedEngine.matterEngine());
    this._renderModule.run(this._renderer.matterRender());
  };

  exports.Simulation = Simulation;

})(this);
