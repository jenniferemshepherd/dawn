$( document ).ready(function() {

  cellFactory.createInitialShapes();
  Matter.Runner.run(runner.matterRunner(), decoratedEngine.matterEngine());
  simulation.setup();
  simulation.run();

  $( "#start" ).click(function() {
    if (decoratedEngine.matterEngine().timing.timestamp === 0) {
      cellFactory.createInitialShapes();
      Matter.Runner.run(runner.matterRunner(), decoratedEngine.matterEngine());
      simulation.setup();
      simulation.run();
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
    cellFactory.createInitialShapes();
    Matter.Runner.run(runner.matterRunner(), decoratedEngine.matterEngine());
    simulation.setup();
    simulation.run();
  });

  $('#wireframe').click(function() {
    decoratedRender.wireframeswitch();
  });


});
