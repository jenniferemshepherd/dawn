'use strict';

(function(exports) {

  function EventController(eventsModule = Matter.Events) {
    this._eventsModule = eventsModule;
  };

  EventController.prototype.register = function(engine, eventString, listener, cellRepository) {
    this._eventsModule.on(engine, eventString, function(event) {
      listener.action(event);
    });
  };

  exports.EventController = EventController;

})(this);
