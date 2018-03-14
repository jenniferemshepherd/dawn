$( document ).ready(function() {

  cellFactory.createInitialShapes();
  Matter.Runner.run(runner.matterRunner(), decoratedEngine.matterEngine());
  simulation.setup();
  simulation.run();

  $( "#start" ).click(function() {
    if (decoratedEngine.matterEngine().timing.timestamp = 0) {
      var cell = cellFactory.createCircle();
      cellFactory.createSquare();
      cellFactory.createEquilateralTriangle();
      cellFactory.createTrapezoid();
      Matter.Runner.run(runner.matterRunner(), decoratedEngine.matterEngine());
      simulation.setup();
      simulation.run();
    };
    });

  $( "#stop" ).click(function() {
    Matter.Runner.stop(runner.matterRunner());
    Matter.Engine.clear(decoratedEngine.matterEngine());
    decoratedEngine.matterEngine().timing.timestamp = 0;
    simulation.world().bodies = [];
    });

  $( "#pause" ).click(function() {
    Matter.Runner.stop(runner.matterRunner());
    });

  $( "#unpause" ).click(function() {
    Matter.Runner.run(runner.matterRunner(), decoratedEngine.matterEngine());
    });

  $('#refresh').click(function() {
    Matter.Runner.stop(runner.matterRunner());
    Matter.Engine.clear(decoratedEngine.matterEngine());
    decoratedEngine.matterEngine().timing.timestamp = 0;
    simulation.world().bodies = [];
    cellFactory.createInitialShapes();
    Matter.Runner.run(runner.matterRunner(), decoratedEngine.matterEngine());
    simulation.setup();
    simulation.run();
  });

  $('#wireframe').click(function() {
    decoratedRender.wireframeswitch();
  });


});
