$( document ).ready(function() {

  startSimulation(cellFactory, runner, decoratedEngine, simulation);

  $( "#start" ).click(function() {
    if (decoratedEngine.matterEngine().timing.timestamp === 0) {
      startSimulation(cellFactory, runner, decoratedEngine, simulation);
    };
    });

  $( "#stop" ).click(function() {
    stopSimulation(runner, decoratedEngine, simulation);
    });

  $( "#pause" ).click(function() {
    stopRunner(runner);
    });

  $( "#unpause" ).click(function() {
    runRunner(runner, decoratedEngine)
    });

  $('#refresh').click(function() {
    stopSimulation(runner, decoratedEngine, simulation);
    startSimulation(cellFactory, runner, decoratedEngine, simulation);
  });

  $('#wireframe').click(function() {
    decoratedRender.wireframeswitch();
  });

  // functions for jQuery

  function startSimulation(cellFactory, runner, decoratedEngine, simulation) {
    cellFactory.createInitialShapes();
    runRunner(runner, decoratedEngine);
    simulation.setup();
    simulation.run();
  };

  function stopSimulation(runner, decoratedEngine, simulation) {
    stopRunner(runner);
    clearEngine(decoratedEngine);
    decoratedEngine.resetTimer();
    simulation.emptyWorld();
  };

  function clearEngine(decoratedEngine) {
    Matter.Engine.clear(decoratedEngine.matterEngine());
  };

  function stopRunner(runner) {
    Matter.Runner.stop(runner.matterRunner());
  };

  function runRunner(runner, decoratedEngine) {
    Matter.Runner.run(runner.matterRunner(), decoratedEngine.matterEngine());
  };
});
