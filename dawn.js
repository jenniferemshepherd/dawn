// instantiate our objects
var decoratedEngine = new DecoratedEngine();
var decoratedRenderer = new DecoratedRender();
var eventController = new EventController();
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
eventController.register(decoratedEngine.matterEngine(), 'afterUpdate', animator, cellRepository);
eventController.register(decoratedEngine.matterEngine(), 'collisionStart', cellFactory, cellRepository);

// run things
simulation.setup();
simulation.run();
