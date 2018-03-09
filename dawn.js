// instantiate our objects
var decoratedEngine = new DecoratedEngine();
var renderer = Matter.Render.create({element: document.body, engine: decoratedEngine.matterEngine()});
var eventController = new EventController();
var animator = new Animator();
var simulation = new Simulation(decoratedEngine, renderer);
var cellRepository = new CellRepository();
var cellFactory = new CellFactory(simulation);
// add things to the world and the cell repo
cellFactory.create(cellRepository)
// register our listener
eventController.register(decoratedEngine.matterEngine(), 'afterUpdate', animator, cellRepository);
// run things
simulation.setup()
simulation.run();
