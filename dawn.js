$( document ).ready(function() {

  const DecoratedEngine = require('./decorators/decorated-engine');
  const DecoratedRender = require('./decorators/decorated-render');
  const DecoratedRunner = require('./decorators/decorated-runner');
  const EventController = require('./controllers/event-controller');
  const Simulation = require('./controllers/simulation');
  const RgbFormatter = require('./services/rgb-formatter');
  const Mutator = require('./services/mutator');
  const ColourInheritor = require('./inheritors/colour-inheritor');
  const PositionInheritor = require('./inheritors/position-inheritor');
  const ShapeInheritor = require('./inheritors/shape-inheritor');
  const CellRepository = require('./models/cell-repository');
  const CellFactory = require('./models/cell-factory');
  const AnimateCells = require('./listeners/animate-cells');
  const BirthCell = require('./listeners/birth-cell');
  const FadeCells = require('./listeners/fade-cells');
  const GrowCells = require('./listeners/grow-cells');
  const KillCells = require('./listeners/kill-cells');

  // insantiate decorators
  var decoratedEngine = new DecoratedEngine();
  var decoratedRender = new DecoratedRender();
  var decoratedRunner = new DecoratedRunner();

  // instantiate controllers
  var eventController = new EventController(decoratedEngine);
  var simulation = new Simulation(decoratedEngine, decoratedRender);

  // instantiate services
  var rgbFormatter = new RgbFormatter();
  var mutator = new Mutator();

  // instantiate inheritors
  var colourInheritor = new ColourInheritor(rgbFormatter, mutator);
  var positionInheritor = new PositionInheritor();
  var shapeInheritor = new ShapeInheritor();

  // instantiate factories and repositories
  var cellRepository = new CellRepository();
  var cellFactory = new CellFactory(simulation, cellRepository, positionInheritor, shapeInheritor, colourInheritor);

  // instantiate listeners
  var animateCells = new AnimateCells(cellRepository);
  var birthCell = new BirthCell(cellFactory, cellRepository);
  var fadeCells = new FadeCells(cellRepository);
  var growCells = new GrowCells(cellRepository);
  var killCells = new KillCells(cellRepository, simulation);

  // create render
  var render = decoratedRender.createRender(decoratedEngine.matterEngine());

  // register listeners
  eventController.register('afterUpdate', animateCells);
  eventController.register('collisionStart', birthCell);
  eventController.register('afterUpdate', fadeCells);
  eventController.register('afterUpdate', growCells);
  eventController.register('afterUpdate', killCells);

  // start the simulation
  startSimulation(cellFactory, decoratedRunner, decoratedEngine, simulation);

  // register listeners for buttons
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

  // helper functions for jQuery
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
