(function(exports) {

  function ColourInheritor() {

  }

  ColourInheritor.prototype.colourMixer = function (parent1, parent2) {
    var weightedParent1Colour = this.weightedParentColour(parent1, 0.8)
    var weightedParent2Colour = this.weightedParentColour(parent2, 0.2)
    var sum = weightedParent1Colour.map(function(num, id) {return num + weightedParent2Colour[id]})
    return this.convertToRgbString(sum)
  };


  ColourInheritor.prototype.weightedParentColour = function (parent, multiplier) {
    return this.formatRgbString(parent).map(x => Math.floor(x * multiplier))
  };

  ColourInheritor.prototype.formatRgbString = function (parent) {
    var rgbString = parent.body().render.fillStyle
    var colour = rgbString.slice(4, rgbString.length-1)
    var colourStringArr = colour.split(', ')
    var intArray = []
    colourStringArr.forEach(function(colourVal) { intArray.push(parseInt(colourVal))});
    return intArray
  };

  ColourInheritor.prototype.convertToRgbString = function (array) {
    var rgb = array.join(', ')
    return `rgb(${rgb})`
  };

  exports.ColourInheritor = ColourInheritor

})(this);
