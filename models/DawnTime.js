'use strict';

(function(exports) {


function DawnTime(decoratedEngine) {
  this._decoratedEngine = decoratedEngine;
};

  DawnTime.prototype.speed = function(input) {
    var current_speed = this._decoratedEngine.matterEngine().timing.timeScale
    var speed = input || current_speed
    this._decoratedEngine.matterEngine().timing.timeScale = input
    return speed
  };

exports.DawnTime = DawnTime;

})(this);
