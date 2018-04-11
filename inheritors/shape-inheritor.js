'use strict';

function ShapeInheritor(scaleFactor = 0.5) {
  this._scaleFactor = scaleFactor;
}

ShapeInheritor.prototype.childVertices = function (parent1, parent2) {
  return this._scaleVertices(this._parentVertices(parent1, parent2));
};

ShapeInheritor.prototype._scaleVertices = function (vertices) {
  return vertices.map(vertex => {
    return {
      x: vertex.x * this._scaleFactor,
      y: vertex.y * this._scaleFactor
    };
  });
};

ShapeInheritor.prototype._parentVertices = function (parent1, parent2) {
  return parent1.body().vertices.concat(parent2.body().vertices);
};

module.exports = ShapeInheritor;
