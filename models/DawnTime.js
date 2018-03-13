'use strict';

(function(exports) {


function DawnTime(decoratedEngine) {
  this._decoratedEngine = decoratedEngine;
  this._speed = 0
};

  DawnTime.prototype.speed = function() {
    return this._speed
  };

exports.DawnTime = DawnTime;

})(this);
