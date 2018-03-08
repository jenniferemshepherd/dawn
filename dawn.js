// instantiate our objects
var decoratedEngine = new DecoratedEngine();
var renderer = Matter.Render.create({element: document.body, engine: decoratedEngine.matterEngine()});
var eventController = new EventController();
var animator = new Animator();
var simulation = new Simulation(decoratedEngine, renderer);
simulation.setup()
var cellRepository = new CellRepository();
// need a cell factory to remove the next 4 lines
var gait = new Gait()
var firstCell = new Cell(Matter.Bodies.circle(50, 200, 10, 10), gait);
var secondCell = new Cell(Matter.Bodies.circle(150, 200, 10, 20), gait);
var thirdCell = new Cell(Matter.Bodies.circle(300, 200, 10, 40), gait);

// add things to the world and the cell repo (really need a cell factory)
simulation.addToWorld(firstCell);
simulation.addToWorld(secondCell);
simulation.addToWorld(thirdCell);
cellRepository.add(firstCell);
cellRepository.add(secondCell);
cellRepository.add(thirdCell);

// register our listener
eventController.register(decoratedEngine.matterEngine(), 'afterUpdate', animator, cellRepository);

// run things
simulation.run();
