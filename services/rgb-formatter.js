'use strict';

const TOP_RGB_VALUE = 255;

function RgbFormatter() {

}

RgbFormatter.prototype.randomColour = function() {
  return `rgb(${Math.floor(Math.random() * TOP_RGB_VALUE)}, ${Math.floor(Math.random() * TOP_RGB_VALUE)}, ${Math.floor(Math.random() * TOP_RGB_VALUE)})`;
};

RgbFormatter.prototype.albinoString = function() {
  return `rgb(${TOP_RGB_VALUE}, ${TOP_RGB_VALUE}, ${TOP_RGB_VALUE})`;
};

RgbFormatter.prototype.formatRgbString = function(parent) {
  var rgbString = parent.body().render.fillStyle;
  var colourStringArr = rgbString.slice(4, rgbString.length-1).split(', ');
  var intArray = [];
  colourStringArr.forEach(function(colourVal) { intArray.push(parseInt(colourVal))});
  return intArray;
};

RgbFormatter.prototype.convertToRgbString = function(array) {
  var rgb = array.join(', ');
  return `rgb(${rgb})`;
};

module.exports = RgbFormatter;
