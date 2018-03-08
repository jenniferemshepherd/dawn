'use strict';

describe("EventController", function() {
  var eventController;
  var mockEngine;
  var mockCellRepository;

  var mockAnimator = {
    propel: function() { return }
  };

  var mockEventsModule = {
    on: function() { return }
  };

  beforeEach(function() {
    eventController = new EventController(mockEventsModule);
    spyOn(mockEventsModule, 'on');
  });

  it("calls on() on the eventsModule with three arguments", function() {
    eventController.register(mockEngine, 'afterUpdate', mockAnimator, mockCellRepository);
    expect(mockEventsModule.on).toHaveBeenCalled();
  });

});
