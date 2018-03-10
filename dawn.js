// instantiate our objects
var decoratedEngine = new DecoratedEngine();
var decoratedRenderer = new DecoratedRender();
var eventController = new EventController();
var animator = new Animator();
var simulation = new Simulation(decoratedEngine, decoratedRenderer);
var cellRepository = new CellRepository();
var cellFactory = new CellFactory(simulation);

// create render
decoratedRenderer.createRender(decoratedEngine.matterEngine());

// create some cells
cellFactory.create(cellRepository)
cellFactory.create(cellRepository)
cellFactory.create(cellRepository)

// register our listeners
eventController.register(decoratedEngine.matterEngine(), 'afterUpdate', animator, cellRepository);

var fertile = true;
var timeArray = [];

Matter.Events.on(decoratedEngine.matterEngine(), 'collisionStart', function(event) {

  var time = decoratedEngine.matterEngine().timing.timestamp;

  if (event.pairs[0].bodyA.label !== 'Rectangle Body') {
    if (time > timeArray[timeArray.length - 1] + 1000) {
      fertile = true;
    }

    if (fertile) {
      var cell = cellFactory.create(cellRepository);
      simulation.addToWorld(cell);
      fertile = false;
      timeArray.push(time);
    }
  }

});

// run things
simulation.setup()
simulation.run();
