'use strict';

(function(exports) {

  function DecoratedRunner(matterRunner = Matter.Runner.create()) {
    this._matterRunner = matterRunner;
  }

  DecoratedRunner.prototype.matterRunner = function () {
    return this._matterRender;
  };

  exports.DecoratedRunner = DecoratedRunner;

})(this);
