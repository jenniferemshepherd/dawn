$( document ).ready(function() {

  startSimulation(cellFactory, runner, decoratedEngine, simulation)

  $( "#start" ).click(function() {
    if (decoratedEngine.matterEngine().timing.timestamp === 0) {
      startSimulation(cellFactory, runner, decoratedEngine, simulation)
    };
    });

  $( "#stop" ).click(function() {
    Matter.Runner.stop(runner.matterRunner())
    Matter.Engine.clear(decoratedEngine.matterEngine());
    decoratedEngine.matterEngine().timing.timestamp = 0;
    simulation.emptyWorld();
    });

  $( "#pause" ).click(function() {
    Matter.Runner.stop(runner.matterRunner())
    });

  $( "#unpause" ).click(function() {
    Matter.Runner.run(runner.matterRunner(), decoratedEngine.matterEngine());
    });

  $('#refresh').click(function() {
    Matter.Runner.stop(runner.matterRunner())
    Matter.Engine.clear(decoratedEngine.matterEngine());
    decoratedEngine.matterEngine().timing.timestamp = 0;
    simulation.emptyWorld();
    startSimulation(cellFactory, runner, decoratedEngine, simulation)
  });

  $('#wireframe').click(function() {
    decoratedRender.wireframeswitch();
  });


  function startSimulation(cellFactory, runner, decoratedEngine, simulation) {
    cellFactory.createInitialShapes();
    Matter.Runner.run(runner.matterRunner(), decoratedEngine.matterEngine());
    simulation.setup();
    simulation.run();
  };

});
