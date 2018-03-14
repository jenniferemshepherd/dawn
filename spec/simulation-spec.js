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
  var mockRenderer = {
    matterRender: function() { return }
  }
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
      spyOn(mockWorldModule, 'add');
      simulation.addWalls();
    });

    it("calls add() on its world module", function() {
      expect(mockWorldModule.add).toHaveBeenCalled();
    });

  });

  describe("#setup()", function() {

    beforeEach(function() {
      spyOn(simulation, 'addWalls');
      spyOn(mockDecoratedEngine, 'disableGravity');
      simulation.setup();
    });

    it("calls addWalls()", function() {
      expect(simulation.addWalls).toHaveBeenCalled();
    });

    it("calls disableGravity() on its decoratedEngine", function() {
      expect(mockDecoratedEngine.disableGravity).toHaveBeenCalled();
    });

  });

  describe("#run()", function() {

    beforeEach(function() {
      spyOn(mockEngineModule, 'run')
      spyOn(mockRenderModule, 'run')
      simulation.run();
    });

    it("calls run on its engine module", function() {
      expect(mockEngineModule.run).toHaveBeenCalledWith(mockMatterEngine);
    });

    it("calls run on its render module", function() {
      expect(mockRenderModule.run).toHaveBeenCalledWith(mockRenderer.matterRender());
    });

  })

});
