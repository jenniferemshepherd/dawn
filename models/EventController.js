'use strict';

(function(exports) {

  function EventController(eventsModule = Matter.Events) {
    this._eventsModule = eventsModule;
  };

  EventController.prototype.register = function(engine, eventString, animator, cellRepository) {
    this._eventsModule.on(engine, eventString, function(event) {
      animator.propel(cellRepository);
    });
  };

  exports.EventController = EventController;

})(this);
