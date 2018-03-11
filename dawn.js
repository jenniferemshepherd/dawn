// instantiate our objects
var decoratedEngine = new DecoratedEngine();
var decoratedRenderer = new DecoratedRender();
var eventController = new EventController(decoratedEngine);
var simulation = new Simulation(decoratedEngine, decoratedRenderer);
var cellRepository = new CellRepository();
var cellFactory = new CellFactory(simulation, cellRepository);
var animator = new Animator(cellRepository);

// create render
decoratedRenderer.createRender(decoratedEngine.matterEngine());

// create some cells
cellFactory.create();
cellFactory.create();
cellFactory.create();

// register our listeners
eventController.register('afterUpdate', animator);
eventController.register('collisionStart', cellFactory);

// run things
simulation.setup();
simulation.run();
