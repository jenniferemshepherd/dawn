'use strict';

describe("Simulation", function() {
  var simulation;
  var engine;
  var render;
  var world;

  beforeEach(function() {
    simulation = new Simulation(engine, render, world);
  });

  it("has an engine", function() {
    expect(simulation.engine()).toEqual(engine);
  });

  it("has a render", function() {
    expect(simulation.render()).toEqual(render);
  });

  it("has a world", function() {
    expect(simulation.world()).toEqual(world);
  });
});
