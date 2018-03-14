'use strict';

(function(exports) {

  function DecoratedEngine(matterEngine = Matter.Engine.create()) {
    this._matterEngine = matterEngine;
  }

  DecoratedEngine.prototype.matterEngine = function() {
    return this._matterEngine;
  };

  DecoratedEngine.prototype.disableGravity = function() {
    this.matterEngine().world.gravity.y = 0;
  };

  exports.DecoratedEngine = DecoratedEngine;

})(this);
