// instantiate our objects
var decoratedEngine = new DecoratedEngine();
var renderer = new DecoratedRender();
var eventController = new EventController();
var animator = new Animator();
var simulation = new Simulation(decoratedEngine, renderer);
var cellRepository = new CellRepository();
var cellFactory = new CellFactory();
cellFactory.create(cellRepository)
// add things to the world and the cell repo (really need a cell factory)
simulation.addToWorld(cellRepository.store()[0]);
// register our listener
eventController.register(decoratedEngine.matterEngine(), 'afterUpdate', animator, cellRepository);
// run things
simulation.setup()
simulation.run();
