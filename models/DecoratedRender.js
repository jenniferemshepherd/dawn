'use strict';

(function(exports) {

  function DecoratedRender(renderModule = Matter.Render) {
    this._renderModule = renderModule;
    this._matterRender = null;
  };

  DecoratedRender.prototype.matterRender = function() {
    return this._matterRender;
  };

  DecoratedRender.prototype.createRender = function(engine, width = 800, height = 600, background = '#222') {
    this._matterRender = this._renderModule.create({
                         element: document.body,
                         engine: engine,
                         options: { width: width, height: height, wireframeBackground: background }
                       });
  }

  exports.DecoratedRender = DecoratedRender;

})(this);
