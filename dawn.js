// instantiate decorators
var decoratedEngine = new DecoratedEngine();
var decoratedRender = new DecoratedRender();
// var runner = new DecoratedRunner();
var runner = Matter.Runner.create();

// instantiate controllers
var eventController = new EventController(decoratedEngine);
var simulation = new Simulation(decoratedEngine, decoratedRender);

// instantiate inheritors and dependencies
var positionInheritor = new PositionInheritor();
var shapeInheritor = new ShapeInheritor();
var rgbFormatter = new RgbFormatter();
var mutator = new Mutator();
var colourInheritor = new ColourInheritor(rgbFormatter, mutator);

// instantiate repository and factory
var cellRepository = new CellRepository();
var cellFactory = new CellFactory(simulation, cellRepository, positionInheritor, shapeInheritor, colourInheritor);

// instantiate listeners
var animator = new Animator(cellRepository);
var grow = new Grow(cellRepository);
var cellFader = new CellFader(cellRepository);
var killer = new Killer(cellRepository, simulation);
var dawnTime = new DawnTime(decoratedEngine);
var birthCell = new BirthCell(cellFactory, cellRepository);

// create render
var render = decoratedRender.createRender(decoratedEngine.matterEngine());

// register listeners
eventController.register('afterUpdate', animator);
eventController.register('afterUpdate', grow);
eventController.register('afterUpdate', killer);
eventController.register('afterUpdate', cellFader);
eventController.register('collisionStart', birthCell);
