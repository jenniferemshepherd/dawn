'use strict';

const Matter = require('../node_modules/matter-js/build/matter');

function DecoratedRender(renderModule = Matter.Render, doc = document) {
  this._renderModule = renderModule;
  this._document = doc;
  this._matterRender = null;
}

DecoratedRender.prototype.matterRender = function() {
  return this._matterRender;
};

DecoratedRender.prototype.createRender = function(engine, width = 800, height = 600, background = '#222', wireframe = false) {
  this._matterRender = this._renderModule.create({
    element: this._document.getElementById('canvas_container'),
    engine: engine,
    options: { width: width, height: height, wireframeBackground: background, wireframes: wireframe }
  });
};

DecoratedRender.prototype.wireframeswitch = function() {
  if (this.matterRender().options.wireframes === false) {
    this.matterRender().options.wireframes = true;
  } else {
    this.matterRender().options.wireframes = false;
  }
};

module.exports = DecoratedRender;
