'use strict';

const Matter = require('../node_modules/matter-js/build/matter');

function EventController(decoratedEngine, eventsModule = Matter.Events) {
  this._decoratedEngine = decoratedEngine;
  this._eventsModule = eventsModule;
}

EventController.prototype.register = function(eventString, listener) {
  this._eventsModule.on(this._decoratedEngine.matterEngine(), eventString, function(event) {
    listener.action(event);
  });
};

module.exports = EventController;
