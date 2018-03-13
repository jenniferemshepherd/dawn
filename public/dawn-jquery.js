console.log("Jennifer is doing the JQuery")

$( document ).ready(function() {

  $( "#start" ).click(function() {
    Matter.Runner.run(runner, decoratedEngine.matterEngine());
    simulation.setup();
    simulation.run();
    });

  $( "#stop" ).click(function() {
    Matter.Runner.stop(runner)
    });

  $( "#pause" ).click(function() {
    Matter.Runner.stop(runner)
    });

  $( "#unpause" ).click(function() {
    Matter.Runner.run(runner, decoratedEngine.matterEngine());
    });

  $('#refresh').click(function() {
    location.reload();
  });

  $('#wireframe').click(function() {
    decoratedRender.wireframeswitch();
  });


});
