'use strict';

describe("PositionInheritor", function() {
  var positionInheritor;
  var mockPosition1 = { x: 3, y: 10 }
  var mockPosition2 = { x: 5, y: 14 }
  var mockBody1 = {
    position: mockPosition1
  };
  var mockBody2 = {
    position: mockPosition2
  };
  var mockParent1 = {
    body: function() { return mockBody1 }
  };
  var mockParent2 = {
    body: function() { return mockBody2 }
  };

  beforeEach(function() {
    positionInheritor = new PositionInheritor();
  });

  it("#x() returns the averaged x-coordinate", function() {
    expect(positionInheritor.x(mockParent1, mockParent2)).toEqual((3 + 5) / 2);
  });

  it("y() returns the averaged y-coordinate", function() {
    expect(positionInheritor.y(mockParent1, mockParent2)).toEqual((10 + 14) / 2);
  });

});
