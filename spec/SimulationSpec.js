'use strict';

describe("Simulation", function() {
  var simulation;
  var ourWorld;
  var engine = {
    world: ourWorld
  };
  var render;
  var worldModule = {
    add: function() { return }
  };
  var cell = {
    body: function() { return "I am a body!" }
  };

  beforeEach(function() {
    simulation = new Simulation(engine, render, worldModule);
  });

  it("has an engine", function() {
    expect(simulation.engine()).toEqual(engine);
  });

  it("has a render", function() {
    expect(simulation.render()).toEqual(render);
  });

  it("has a world", function() {
    expect(simulation.world()).toEqual(ourWorld);
  });

  describe("#addToWorld()", function() {

    beforeEach(function() {
      spyOn(worldModule, 'add');
      simulation.addToWorld(cell);
    });

    it("called add() on its world module", function() {
      expect(worldModule.add).toHaveBeenCalledWith(ourWorld, "I am a body!");
    });

  });

  describe("#addWalls()", function() {

    beforeEach(function() {
      spyOn(worldModule, 'add');
      simulation.addWalls();
    });

    it("calls add() on its world module", function() {
      expect(worldModule.add).toHaveBeenCalled();
    });

  });

});
