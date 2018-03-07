'use strict';

(function(exports) {

  function Engine(matterEngine = Matter.Engine.create()) {
    this._matterEngine = matterEngine
  };

  Engine.prototype.matterEngine = function() {
    return this._matterEngine;
  };

  Engine.prototype.disableGravity = function() {
    this.matterEngine().world.gravity.y = 0
  };

  exports.Engine = Engine;

})(this);
