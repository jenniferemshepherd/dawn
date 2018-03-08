'use strict';

(function(exports) {

  function EventController(eventsModule = Matter.Events) {
    this._eventsModule = eventsModule
  };

  EventController.prototype.register = function(engine, eventString, animator, cellRepository) {
    this._eventsModule.on(engine, eventString, function(event) {
      animator.propel(cellRepository)
    });
  };

  exports.EventController = EventController;

})(this);

//
// this._eventsModule.on(this._engine, 'afterUpdate', function(event) {
//   this.world.bodies.forEach(function(cellBody) {
//     var force1 = Matter.Vector.create(0.005 * (0.5 -  Math.random()), 0.005 * (0.5 - Math.random()));
//     Matter.Body.applyForce(cellBody, cellBody.position, force1);
//   });
// });
