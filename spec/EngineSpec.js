'use strict';

describe("Engine", function() {
  var engine;
  var ourGravity = {
    y: 30
  };
  var ourWorld = {
    gravity: ourGravity
  };
  var matterEngine = {
    world: ourWorld
  };

  beforeEach(function() {
    engine = new Engine(matterEngine)
  });

  it("stores an instance of matterEngine", function() {
    expect(engine.matterEngine()).toEqual(matterEngine)
  });

  describe('#disableGravity', function() {
    it("sets gravity to 0", function() {
      engine.disableGravity()
      expect(engine.matterEngine().world.gravity.y).toEqual(0)
    });
  });

});
