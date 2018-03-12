'use strict';

(function(exports) {

  function CellFactory(simulation, cellRepository) {
    this._simulation = simulation;
    this._cellRepository = cellRepository;
    this._timeArray = [0];
  }

  CellFactory.prototype.create = function() {
    var cell = new Cell(Matter.Bodies.circle(150, 200, 30, {
                                              render: {
                                                   fillStyle: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
                                                   lineWidth: 3
                                              }
                                          }),
                                          new Gait());
    console.log(`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`)
    this._cellRepository.add(cell);
    this._simulation.addToWorld(cell);
    return cell;
  };

  CellFactory.prototype.createFromParents = function (parent1, parent2) {
    var averageXPosition = 0.5 * (parent1.body().position.x + parent2.body().position.x);
    var averageYPosition = 0.5 * (parent1.body().position.y + parent2.body().position.y)
    var cell = new Cell(Matter.Bodies.circle(averageXPosition, averageYPosition, 30, { render: {fillStyle: this.colourMixer(parent1, parent2) }}), new Gait());
    console.log(cell)
    this._cellRepository.add(cell);
    this._simulation.addToWorld(cell);
    return cell;
  };

  CellFactory.prototype.formatRgbString = function (parent) {
    var rgbString = parent.body().render.fillStyle
    var colour = rgbString.slice(4, rgbString.length-1)
    var colourStringArr = colour.split(', ')
    var intArray = []
    colourStringArr.forEach(function(colourVal) { intArray.push(parseInt(colourVal))});
    return intArray
  };

  CellFactory.prototype.weightedParentColour = function (parent, multiplier) {
    return this.formatRgbString(parent).map(x => Math.floor(x * multiplier))
  };

  CellFactory.prototype.convertToRgbString = function (array) {
    var rgb = array.join(', ')
    return `rgb(${rgb})`
  };

  CellFactory.prototype.colourMixer = function (parent1, parent2) {
    var weightedParent1Colour = this.weightedParentColour(parent1, 0.8)
    var weightedParent2Colour = this.weightedParentColour(parent2, 0.2)
    var sum = weightedParent1Colour.map(function(num, id) {return num + weightedParent2Colour[id]})
    return this.convertToRgbString(sum)
  };

  CellFactory.prototype.action = function (event) {
    var time = event.source.timing.timestamp;
    if (this._isMating(time, event)) {
      var parent1 = this._cellRepository.findCellByBodyId(event.pairs[0].bodyA.id);
      var parent2 = this._cellRepository.findCellByBodyId(event.pairs[0].bodyB.id);
      this.createFromParents(parent1, parent2);
      this._timeArray.push(time);
    };
  };

  CellFactory.prototype._isMating = function (time, event) {
    return (this._isFertile(time) && this._isCompatible(event));
  };

  CellFactory.prototype._isFertile = function (time) {
    return (time > this._timeArray[this._timeArray.length - 1] + 1000)
  };

  CellFactory.prototype._isCompatible = function (event) {
    return (event.pairs[0].bodyA.label !== 'Rectangle Body' && event.pairs[0].bodyB.label !== 'Rectangle Body')
  };

  exports.CellFactory = CellFactory;

})(this);
