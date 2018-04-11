'use strict';

const Matter = require('../node_modules/matter-js/build/matter');

function DecoratedEngine(matterEngine = Matter.Engine.create()) {
  this._matterEngine = matterEngine;
}

DecoratedEngine.prototype.matterEngine = function() {
  return this._matterEngine;
};

DecoratedEngine.prototype.disableGravity = function() {
  this.matterEngine().world.gravity.y = 0;
};

DecoratedEngine.prototype.resetTimer = function() {
  this.matterEngine().timing.timestamp = 0;
};

module.exports = DecoratedEngine;
