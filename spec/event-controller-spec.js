'use strict';

const EventController = require('../controllers/event-controller');

describe("EventController", function() {
  var eventController;

  var mockDecoratedEngine = {
    matterEngine: function() { return }
  };

  var mockEventsModule = {
    on: function() { return }
  };

  var mockListener = {
    action: function() { return }
  };

  beforeEach(function() {
    eventController = new EventController(mockDecoratedEngine, mockEventsModule);
    spyOn(mockEventsModule, 'on');
    eventController.register('afterUpdate', mockListener);
  });

  it("calls on() on the events module", function() {
    expect(mockEventsModule.on).toHaveBeenCalled();
  });

});
