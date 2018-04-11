'use strict';

const Matter = require('../node_modules/matter-js/build/matter');
const Cell = require('../models/cell');
const Age = require('../properties/age');
const Voice = require('../properties/voice');
const Gait = require('../properties/gait');

function CellFactory(
  simulation,
  cellRepository,
  positionInheritor,
  shapeInheritor,
  colourInheritor,
  bodyModule = Matter.Bodies,
  vectorModule = Matter.Vector
) {
  this._simulation = simulation;
  this._cellRepository = cellRepository;
  this._positionInheritor = positionInheritor;
  this._shapeInheritor = shapeInheritor;
  this._colourInheritor = colourInheritor;
  this._bodyModule = bodyModule;
  this._vectorModule = vectorModule;
  this._timeArray = [0];
}

CellFactory.prototype.createCircle = function () {
  var cell = new Cell(
    this._bodyModule.circle(
      150,
      200,
      30,
      { render:
        {
          fillStyle: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        }
      }
    ),
    new Gait(),
    new Age(0),
  );
  this._cellRepository.add(cell);
  this._simulation.addToWorld(cell);
  return cell;
};

CellFactory.prototype.createSquare = function () {
  var cell = new Cell(
    this._bodyModule.rectangle(
      150,
      200,
      60,
      60,
      { render:
        {
          fillStyle: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        }
      }
    ),
    new Gait(),
    new Age(0),
  );
  this._cellRepository.add(cell);
  this._simulation.addToWorld(cell);
  return cell;
};

CellFactory.prototype.createEquilateralTriangle = function () {
  var x = 15;
  var vectors = [
    this._vectorModule.create(1.5 * x, Math.sqrt(6.75) * x),
    this._vectorModule.create(-3 * x, 0),
    this._vectorModule.create(1.5 * x, - 1 * Math.sqrt(6.75) * x)
  ];
  var cell = new Cell(
    this._bodyModule.fromVertices(
      150,
      200,
      vectors,
      { render:
        {
           fillStyle: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
        }
      }
    ),
    new Gait(),
    new Age(0),
  );
  this._cellRepository.add(cell);
  this._simulation.addToWorld(cell);
  return cell;
};

CellFactory.prototype.createTrapezoid = function () {
  var cell = new Cell(
    this._bodyModule.trapezoid(
      150,
      200,
      60,
      60,
      0.5,
      { render:
        {
          fillStyle: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
        }
      }
    ),
    new Gait(),
    new Age(0),
  );
  this._cellRepository.add(cell);
  this._simulation.addToWorld(cell);
  return cell;
};

CellFactory.prototype.createInitialShapes = function () {
  this.createCircle();
  this.createEquilateralTriangle();
  this.createSquare();
  this.createTrapezoid();
};

CellFactory.prototype.createFromParents = function (parent1, parent2, time) {
  var cell = new Cell(this._bodyModule.fromVertices(
    this._positionInheritor.x(parent1, parent2),
    this._positionInheritor.y(parent1, parent2),
    this._shapeInheritor.childVertices(parent1, parent2),
    { render: {fillStyle: this._colourInheritor.colourMixer(parent1, parent2) }}),
                      new Gait(),
                      new Age(time),
                      new Voice()
                     );
  cell.voice().playEnv();
  this._cellRepository.add(cell);
  this._simulation.addToWorld(cell);
  return cell;
};

module.exports = CellFactory;
