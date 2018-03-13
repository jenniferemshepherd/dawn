(function(exports) {

  function PositionInheritor() {

  }

  PositionInheritor.prototype.x = function (parent1, parent2) {
    return this._mean(parent1.body().position.x, parent2.body().position.x);
  };

  PositionInheritor.prototype.y = function (parent1, parent2) {
    return this._mean(parent1.body().position.y, parent2.body().position.y);
  };

  PositionInheritor.prototype._mean = function (number1, number2) {
    return 0.5 * (number1 + number2);
  };

  exports.PositionInheritor = PositionInheritor;

})(this);
