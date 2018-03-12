(function(exports) {

  function ColourInheritor() {

  }

  ColourInheritor.prototype.colourMixer = function (parent1, parent2) {
    var weightedParent1Colour = this._weightedParentColour(parent1, 0.8)
    var weightedParent2Colour = this._weightedParentColour(parent2, 0.2)
    var sum = weightedParent1Colour.map(function(num, id) {return num + weightedParent2Colour[id]})
    return this._convertToRgbString(sum)
  };


  ColourInheritor.prototype._weightedParentColour = function (parent, multiplier) {
    return this._formatRgbString(parent).map(x => Math.floor(x * multiplier))
  };

  ColourInheritor.prototype._formatRgbString = function (parent) {
    var rgbString = parent.body().render.fillStyle
    var colourStringArr = rgbString.slice(4, rgbString.length-1).split(', ')
    var intArray = []
    colourStringArr.forEach(function(colourVal) { intArray.push(parseInt(colourVal))});
    return intArray
  };

  ColourInheritor.prototype._convertToRgbString = function (array) {
    var rgb = array.join(', ')
    return `rgb(${rgb})`
  };

  exports.ColourInheritor = ColourInheritor

})(this);
