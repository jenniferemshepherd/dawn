'use strict';

(function(exports) {

  function DecoratedRender(matterRender = Matter.Render.create({element: document.body, engine: decoratedEngine.matterEngine()})) {
    this._matterRender = matterRender;
  };

  DecoratedRender.prototype.matterRender = function() {
    return this._matterRender;
  };

  exports.DecoratedRender = DecoratedRender;

})(this);
