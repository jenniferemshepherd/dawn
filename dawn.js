// instantiate our objects
var decoratedEngine = new DecoratedEngine();
var decoratedRender = new DecoratedRender();
var eventController = new EventController(decoratedEngine);
var simulation = new Simulation(decoratedEngine, decoratedRender);
var cellRepository = new CellRepository();
var shapeInheritor = new ShapeInheritor();
var positionInheritor = new PositionInheritor();
var rgbFormatter = new RgbFormatter();
var mutator = new Mutator();
var colourInheritor = new ColourInheritor(rgbFormatter, mutator);
var cellFactory = new CellFactory(simulation, cellRepository, positionInheritor, shapeInheritor, colourInheritor);
var killCells = new KillCells(cellRepository, simulation);
var dawnTime = new DawnTime(decoratedEngine);

// instantiate our listeners
var animateCells = new AnimateCells(cellRepository);
var birthCell = new BirthCell(cellFactory, cellRepository);
var fadeCells = new FadeCells(cellRepository);
var growCells = new GrowCells(cellRepository);

// create render
var render = decoratedRender.createRender(decoratedEngine.matterEngine());

// create runner
var runner = new DecoratedRunner();

// register our listeners
eventController.register('afterUpdate', animateCells);
eventController.register('collisionStart', birthCell);
eventController.register('afterUpdate', fadeCells);
eventController.register('afterUpdate', growCells);
eventController.register('afterUpdate', killCells);
