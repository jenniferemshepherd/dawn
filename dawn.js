// instantiate our objects
var decoratedEngine = new DecoratedEngine();
var decoratedRenderer = new DecoratedRender();
var eventController = new EventController(decoratedEngine);
var simulation = new Simulation(decoratedEngine, decoratedRenderer);
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

// instantiate our listeners
var updateCellsFertility = new UpdateCellsFertility(cellRepository);

// create render
decoratedRenderer.createRender(decoratedEngine.matterEngine());

// create some cells
var cell = cellFactory.createCircle();
cellFactory.createSquare();
cellFactory.createEquilateralTriangle();
cellFactory.createRhombus();

// register our listeners
eventController.register('afterUpdate', animator);
eventController.register('afterUpdate', grow);
eventController.register('afterUpdate', killer);
eventController.register('afterUpdate', cellFader);
eventController.register('collisionStart', cellFactory);

// run things
simulation.setup();
simulation.run();
