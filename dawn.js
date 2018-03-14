// instantiate our objects
// var Common = Matter.Common;
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
var animator = new Animator(cellRepository);
var grow = new Grow(cellRepository);
var cellFader = new CellFader(cellRepository);
var killer = new Killer(cellRepository, simulation);
var notes = new Notes();
var dawnTime = new DawnTime(decoratedEngine);

// instantiate our listeners
var birthCell = new BirthCell(cellFactory, cellRepository);

// create render
var render = decoratedRender.createRender(decoratedEngine.matterEngine());

// create runner
// var runner = new DecoratedRunner();
var runner = Matter.Runner.create();

// create some cells - now happens in jquery but only til refactor
// var cell = cellFactory.createCircle();
// cellFactory.createSquare();
// cellFactory.createEquilateralTriangle();
// cellFactory.createTrapezoid();

// register our listeners
eventController.register('afterUpdate', animator);
eventController.register('afterUpdate', grow);
eventController.register('afterUpdate', killer);
eventController.register('afterUpdate', cellFader);
eventController.register('collisionStart', birthCell);

// run things
// simulation.setup();
// simulation.run();
