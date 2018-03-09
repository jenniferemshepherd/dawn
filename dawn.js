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

// run things
simulation.setup()
simulation.run();
