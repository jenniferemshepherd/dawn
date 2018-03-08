'use strict';

describe("Simulation", function() {
  var simulation;
  var mockWorld;
  var mockMatterEngine = {
    world: mockWorld
  };
  var mockDecoratedEngine = {
    matterEngine: function() { return mockMatterEngine },
    disableGravity: function() { return }
  };
  var mockRenderer;
  var mockWorldModule = {
    add: function() { return }
  };
  var mockCell = {
    body: function() { return "I am a body!" }
  };
  var mockEngineModule = {
    run: function() { return }
  };
  var mockRenderModule = {
    run: function() { return }
  };

  beforeEach(function() {
    simulation = new Simulation(mockDecoratedEngine, mockRenderer, mockWorldModule, mockEngineModule, mockRenderModule);
  });

  describe("initially", function() {
    it("has a decorated engine", function() {
      expect(simulation.decoratedEngine()).toEqual(mockDecoratedEngine);
    });

    it("has a renderer", function() {
      expect(simulation.renderer()).toEqual(mockRenderer);
    });

    it("has a world", function() {
      expect(simulation.world()).toEqual(mockWorld);
    });
  })

  describe("#addToWorld()", function() {

    beforeEach(function() {
      spyOn(mockWorldModule, 'add');
      simulation.addToWorld(mockCell);
    });

    it("calls add() on its world module", function() {
      expect(mockWorldModule.add).toHaveBeenCalledWith(mockWorld, "I am a body!");
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
