// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
    Body = Matter.Body;
    Vector = Matter.Vector;
    Events = Matter.Events;

// create an engine
var engine = Engine.create();

engine.world.gravity.y = 0

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
    width: 1200,
    height: 800
  }
});

// create two boxes and a ground
var boxA = Bodies.circle(780, 700, 100, 100);
var boxB = Bodies.circle(400, 600, 150, 150);
var ground = Bodies.rectangle(600, 800, 1200, 1, { isStatic: true });
var wall1 = Bodies.rectangle(0, 400, 1, 1200, { isStatic: true });
var wall2 = Bodies.rectangle(1200, 400, 1, 1200, { isStatic: true });
var ceiling = Bodies.rectangle(600, 0, 1200, 1, { isStatic: true });

// add all of the bodies to the world

Events.on(engine, 'afterUpdate', function(event) {
  var force1 = Vector.create(0.1 * (0.5 -  Math.random()), 0.1 * (0.5 - Math.random()));
  var force2 = Vector.create(0.1 * (0.5 -  Math.random()), 0.1 * (0.5 - Math.random()));
  Body.applyForce(boxA, boxA.position, force1)
  Body.applyForce(boxB, boxB.position, force2)
});

Events.on(engine, 'collisionActive', function(event) {
  if (event.pairs.length > 0) {
      console.log(event.pairs)
  }
})

World.add(engine.world, [boxA, boxB, wall1, wall2, ground, ceiling]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
