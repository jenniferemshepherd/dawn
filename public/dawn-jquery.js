console.log("Jennifer is doing the JQuery")

$( document ).ready(function() {

  $( "#start" ).click(function() {
    simulation.setup();
    simulation.run();
    });

  $( "#stop" ).click(function() {

    });

  $( "#pause" ).click(function() {

    });


  $('#refresh').click(function() {
    location.reload();
  });

  $('#wireframe').click(function() {
    decoratedRender.wireframeswitch();
  });


});
