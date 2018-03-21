// insantiate decorators
var decoratedEngine = new DecoratedEngine();
var decoratedRender = new DecoratedRender();
var decoratedRunner = new DecoratedRunner();

// instantiate controllers
var eventController = new EventController(decoratedEngine);
var simulation = new Simulation(decoratedEngine, decoratedRender);

// instantiate factories and repositories
var cellRepository = new CellRepository();
var cellFactory = new CellFactory(simulation, cellRepository, positionInheritor, shapeInheritor, colourInheritor);

// instantiate services
var rgbFormatter = new RgbFormatter();
var mutator = new Mutator();

// instantiate inheritors
var colourInheritor = new ColourInheritor(rgbFormatter, mutator);
var positionInheritor = new PositionInheritor();
var shapeInheritor = new ShapeInheritor();

// instantiate listeners
var animateCells = new AnimateCells(cellRepository);
var birthCell = new BirthCell(cellFactory, cellRepository);
var fadeCells = new FadeCells(cellRepository);
var growCells = new GrowCells(cellRepository);
var killCells = new KillCells(cellRepository, simulation);

// create render
var render = decoratedRender.createRender(decoratedEngine.matterEngine());

// create runner

// register listeners
eventController.register('afterUpdate', animateCells);
eventController.register('collisionStart', birthCell);
eventController.register('afterUpdate', fadeCells);
eventController.register('afterUpdate', growCells);
eventController.register('afterUpdate', killCells);
