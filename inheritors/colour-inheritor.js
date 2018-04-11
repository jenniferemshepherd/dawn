'use strict';

function ColourInheritor(rgbFormatter, mutator) {
  this._rgbFormatter = rgbFormatter,
  this._mutator = mutator;
}

var PARENT1_WEIGHT = 0.8;
var PARENT2_WEIGHT = 0.2;

ColourInheritor.prototype.colourMixer = function(parent1, parent2) {
  if (this._mutator.isMutation()) {
    if (this._mutator.isMutation()) {
      return this._rgbFormatter.albinoString();
    }
    return this._rgbFormatter.randomColour();
  }
  return this._mixedColour(parent1, parent2)
};

ColourInheritor.prototype._mixedColour = function(parent1, parent2) {
  var weightedParent1Colour = this._weightedParentColour(parent1, PARENT1_WEIGHT);
  var weightedParent2Colour = this._weightedParentColour(parent2, PARENT2_WEIGHT);
  var sum = weightedParent1Colour.map(function(num, id) {return num + weightedParent2Colour[id]});
  return this._rgbFormatter.convertToRgbString(sum);
};

ColourInheritor.prototype._weightedParentColour = function(parent, multiplier) {
  return this._rgbFormatter.formatRgbString(parent).map(x => Math.floor(x * multiplier));
};

module.exports = ColourInheritor;
