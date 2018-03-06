<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>dawn</title>
  </head>
  <body>

    <script src="../node_modules/matter-js/build/matter.js"></script>
    <script src="../models/Cell.js"></script>
    <script src="../models/Simulation.js"></script>

    <script>
      var myEngine = Matter.Engine.create();
      var myRenderer = Matter.Render.create({element: document.body, engine: myEngine});
      var MvpSimulation = new Simulation(myEngine, myRenderer, Matter.World)
      var firstCell = new Cell(Matter.Bodies.circle(400, 200, 80, 80))
      MvpSimulation.addtoWorld(firstCell)
      Matter.Engine.run(myEngine);
      Matter.Render.run(myRenderer);
    </script>

  </body>
</html>
