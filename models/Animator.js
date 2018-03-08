'use strict';

(function(exports) {

  function Animator(bodyModule = Matter.Body) {
    this._bodyModule = bodyModule;
  };

  Animator.prototype.propel = function(cellRepository) {
    cellRepository.store().forEach(function(cell) {
      var force1 = Matter.Vector.create(cell.gait().calculate(), cell.gait().calculate());
      this._bodyModule.applyForce(cell.body(), cell.body().position, force1);
    }.bind(this));
  };

  exports.Animator = Animator;
})(this);
