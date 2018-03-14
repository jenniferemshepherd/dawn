'use strict';

(function(exports) {

  function DecoratedRunner(matterRunner = Matter.Runner.create()) {
    this._matterRunner = matterRunner;
  }

  DecoratedRunner.prototype.matterRunner = function () {
    return this._matterRunner;
  };

  DecoratedRunner.prototype.createRunner = function () {
    this.matterRunner.create();
  };

  exports.DecoratedRunner = DecoratedRunner;

})(this);
