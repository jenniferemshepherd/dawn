console.log("Jennifer is doing the JQuery")

$( document ).ready(function() {

  $( "#start" ).click(function() {
    var cell = cellFactory.createCircle();
    cellFactory.createSquare();
    cellFactory.createEquilateralTriangle();
    Matter.Runner.run(runner._matterRunner, decoratedEngine.matterEngine());
    simulation.setup();
    simulation.run();
    });

  $( "#stop" ).click(function() {
    Matter.Runner.stop(runner)
    Matter.Engine.clear(decoratedEngine.matterEngine());
    simulation.world().bodies = []
    });

  $( "#pause" ).click(function() {
    Matter.Runner.stop(runner._matterRunner)
    });

  $( "#unpause" ).click(function() {
    Matter.Runner.run(runner._matterRunner, decoratedEngine.matterEngine());
    });

  $('#refresh').click(function() {
    // Common._nextId = 0;
    // Common._seed = 0;
    Matter.Runner.stop(runner)
    Matter.Engine.clear(decoratedEngine.matterEngine());
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
