'use strict';

const Matter = require('../node_modules/matter-js/build/matter');

function DecoratedRunner(matterRunner = Matter.Runner.create()) {
  this._matterRunner = matterRunner;
}

DecoratedRunner.prototype.matterRunner = function () {
  return this._matterRunner;
};

module.exports = DecoratedRunner;
