// insantiate decorators
var decoratedEngine = new DecoratedEngine();
var decoratedRunner = new DecoratedRunner();

// instantiate our objects
var decoratedRender = new DecoratedRender();
var eventController = new EventController(decoratedEngine);
var simulation = new Simulation(decoratedEngine, decoratedRender);
var cellRepository = new CellRepository();
var cellFactory = new CellFactory(simulation, cellRepository, positionInheritor, shapeInheritor, colourInheritor);
var dawnTime = new DawnTime(decoratedEngine);

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
