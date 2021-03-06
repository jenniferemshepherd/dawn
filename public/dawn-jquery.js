$( document ).ready(function() {

  startSimulation(cellFactory, decoratedRunner, decoratedEngine, simulation);

  $( "#start" ).click(function() {
      if (decoratedEngine.matterEngine().timing.timestamp === 0) {
        startSimulation(cellFactory, decoratedRunner, decoratedEngine, simulation);
      };
    });

  $( "#stop" ).click(function() {
    stopSimulation(decoratedRunner, decoratedEngine, simulation);
    });

  $( "#pause" ).click(function() {
    pauseRunner();
    });

  $( "#resume" ).click(function() {
      if (decoratedRunner._matterRunner.enabled === false) {
        resumeRunner();
      };
    });

  $('#refresh').click(function() {
    stopSimulation(decoratedRunner, decoratedEngine, simulation);
    startSimulation(cellFactory, decoratedRunner, decoratedEngine, simulation);
  });

  $('#wireframe').click(function() {
    decoratedRender.wireframeswitch();
  });

  // functions for jQuery

  function startSimulation(cellFactory, decoratedRunner, decoratedEngine, simulation) {
    cellFactory.createInitialShapes();
    runRunner(decoratedRunner, decoratedEngine);
    simulation.setup();
    simulation.runRender();
  };

  function stopSimulation(decoratedRunner, decoratedEngine, simulation) {
    stopRunner(decoratedRunner);
    clearEngine(decoratedEngine);
    decoratedEngine.resetTimer();
    simulation.emptyWorld();
  };

  function clearEngine(decoratedEngine) {
    Matter.Engine.clear(decoratedEngine.matterEngine());
  };

  function stopRunner(runner) {
    Matter.Runner.stop(decoratedRunner.matterRunner());
  };

  function runRunner(runner, decoratedEngine) {
    Matter.Runner.run(decoratedRunner.matterRunner(), decoratedEngine.matterEngine());
  };

  function pauseRunner() {
    decoratedRunner.matterRunner().enabled = false;
  };

  function resumeRunner() {
    decoratedRunner.matterRunner().enabled = true;
  };

});
