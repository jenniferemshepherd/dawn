'use strict';

(function(exports) {

  function CellFactory(
    simulation,
    cellRepository,
    positionInheritor,
    shapeInheritor,
    vectorModule = Matter.Vector,
    colourInheritor = new ColourInheritor(),
  ) {
    this._simulation = simulation;
    this._cellRepository = cellRepository;
    this._positionInheritor = positionInheritor;
    this._shapeInheritor = shapeInheritor;
    this._timeArray = [0];
    this._vectorModule = vectorModule;
    this._colourInheritor = colourInheritor
  }

  CellFactory.prototype.createCircle = function () {
    var cell = new Cell(Matter.Bodies.circle(150, 200, 30, {
                                              render: {
                                                   fillStyle: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
                                              }
                                            }),
                                            new Gait(),
                                            new Age());
    this._cellRepository.add(cell);
    this._simulation.addToWorld(cell);
    return cell;
  };

  CellFactory.prototype.createSquare = function () {
    var x = 40;
    var vectors = [Matter.Vector.create(x, 0), Matter.Vector.create(0, x), Matter.Vector.create(-x, 0), Matter.Vector.create(0, -x)]
    var cell = new Cell(Matter.Bodies.fromVertices(150, 200, vectors, {
                                              render: {
                                                   fillStyle: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
                                              }
                                            }),
                                            new Gait(),
                                            new Age());
    this._cellRepository.add(cell);
    this._simulation.addToWorld(cell);
    return cell;
  };

  CellFactory.prototype.createEquilateralTriangle = function () {
    var x = 15;
    var vectors = [Matter.Vector.create(1.5 * x, Math.sqrt(6.75) * x), Matter.Vector.create(-3 * x, 0), Matter.Vector.create(1.5 * x, - 1 * Math.sqrt(6.75) * x)];
    var cell = new Cell(Matter.Bodies.fromVertices(150, 200, vectors, {
                                              render: {
                                                   fillStyle: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
                                              }
                                            }),
                                            new Gait(),
                                            new Age());
    this._cellRepository.add(cell);
    this._simulation.addToWorld(cell);
    return cell;
  };

  CellFactory.prototype.createRhombus = function () {
    var x = 25;
    var vectors = [Matter.Vector.create(2 * x, 0), Matter.Vector.create(0, x), Matter.Vector.create(-2 * x, 0), Matter.Vector.create(0, -x)];
    var cell = new Cell(Matter.Bodies.fromVertices(150, 200, vectors, {
                                              render: {
                                                   fillStyle: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
                                              }
                                            }),
                                            new Gait(),
                                            new Age());
    this._cellRepository.add(cell);
    this._simulation.addToWorld(cell);
    return cell;
  };

  CellFactory.prototype.createFromParents = function (parent1, parent2) {
    parent1.makeInfertile();
    parent2.makeInfertile();
    var cell = new Cell(Matter.Bodies.fromVertices(
      this._positionInheritor.x(parent1, parent2),
      this._positionInheritor.y(parent1, parent2), 
      this._shapeInheritor.childVertices(parent1, parent2),
      { render: {fillStyle: this._colourInheritor.colourMixer(parent1, parent2) }}), 
                        new Gait(), 
                        new Age()
                       );
    this._cellRepository.add(cell);
    this._simulation.addToWorld(cell);
    return cell;
  };

  CellFactory.prototype.action = function (event) {
    var time = event.source.timing.timestamp;
    if (this._isMating(time, event)) {
      var parent1 = this._cellRepository.findCellByBodyId(event.pairs[0].bodyA.id);
      var parent2 = this._cellRepository.findCellByBodyId(event.pairs[0].bodyB.id);
      this.createFromParents(parent1, parent2);
      this._timeArray.push(time);
    }
  };

  CellFactory.prototype._isMating = function (time, event) {
    return (this._isFertile(time) && this._isCompatible(event));
  };

  CellFactory.prototype._isFertile = function (time) {
    return (time > this._timeArray[this._timeArray.length - 1] + 1000);
  };

  CellFactory.prototype._isCompatible = function (event) {
    return (event.pairs[0].bodyA.label !== 'Rectangle Body' && event.pairs[0].bodyB.label !== 'Rectangle Body');
  };

  exports.CellFactory = CellFactory;

})(this);
