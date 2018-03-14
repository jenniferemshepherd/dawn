$( document ).ready(function() {

  var cell = cellFactory.createCircle();
  cellFactory.createSquare();
  cellFactory.createEquilateralTriangle();
  cellFactory.createTrapezoid();
  Matter.Runner.run(runner, decoratedEngine.matterEngine());
  simulation.setup();
  simulation.run();

  $( "#start" ).click(function() {

    var cell = cellFactory.createCircle();
    cellFactory.createSquare();
    cellFactory.createEquilateralTriangle();
    cellFactory.createTrapezoid();
    Matter.Runner.run(runner, decoratedEngine.matterEngine());
    simulation.setup();
    simulation.run();
    });

  $( "#stop" ).click(function() {
    Matter.Runner.stop(runner);
    Matter.Engine.clear(decoratedEngine.matterEngine());
    decoratedEngine.matterEngine().timing.timestamp = 0;
    simulation.world().bodies = [];
    });

  $( "#pause" ).click(function() {
    Matter.Runner.stop(runner);
    });

  $( "#unpause" ).click(function() {
    Matter.Runner.run(runner, decoratedEngine.matterEngine());
    });

  $('#refresh').click(function() {
    Matter.Runner.stop(runner);
    Matter.Engine.clear(decoratedEngine.matterEngine());
    decoratedEngine.matterEngine().timing.timestamp = 0;
    simulation.world().bodies = []
    var cell = cellFactory.createCircle();
    cellFactory.createSquare();
    cellFactory.createEquilateralTriangle();
    Matter.Runner.run(runner, decoratedEngine.matterEngine());
    simulation.setup();
    simulation.run();
    // location.reload();
  });

  $('#wireframe').click(function() {
    decoratedRender.wireframeswitch();
  });


});
