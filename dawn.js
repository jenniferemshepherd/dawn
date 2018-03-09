// instantiate our objects
var decoratedEngine = new DecoratedEngine();
var decoratedRenderer = new DecoratedRender();
var eventController = new EventController();
var animator = new Animator();
var simulation = new Simulation(decoratedEngine, decoratedRenderer);
var cellRepository = new CellRepository();
var cellFactory = new CellFactory();
// create render
decoratedRenderer.createRender(decoratedEngine.matterEngine());
cellFactory.create(cellRepository)
// add things to the world and the cell repo 
simulation.addToWorld(cellRepository.store()[0]);
// register our listener
eventController.register(decoratedEngine.matterEngine(), 'afterUpdate', animator, cellRepository);
// run things
simulation.setup()
simulation.run();
