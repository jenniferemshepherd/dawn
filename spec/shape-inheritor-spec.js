'use strict';

describe("ShapeInheritor", function() {
  var shapeInheritor;

  const SCALE_FACTOR = 0.65;

  var vertex1 = { x: 3, y: 0 };
  var vertex2 = { x: 10, y: 10 };
  var vertex3 = { x: 20, y: 20 };
  var vertex4 = { x: 5, y: 5 };
  var vertex5 = { x: 15, y: 15 };
  var vertex6 = { x: 25, y: 25 };

  var mockVertices1 = [vertex1, vertex2, vertex3];
  var mockVertices2 = [vertex4, vertex5, vertex6];

  var mockBody1 = {
    vertices: [vertex1, vertex2, vertex3]
  };

  var mockBody2 = {
    vertices: [vertex4, vertex5, vertex6]
  };

  var mockParent1 = {
    body: function() { return mockBody1 }
  };

  var mockParent2 = {
    body: function() { return mockBody2 }
  }

  beforeEach(function() {
    shapeInheritor = new ShapeInheritor(SCALE_FACTOR);
  });

  describe("#_parentVertices", function() {
    it("returns a concatenated array of parents' vertices", function() {
      expect(shapeInheritor._parentVertices(mockParent1, mockParent2)).toEqual([
        vertex1,
        vertex2,
        vertex3,
        vertex4,
        vertex5,
        vertex6
      ]);
    });

  });

  describe("#_scaleVertices", function() {
    it("scales the x-coordinate of the first vertex by 0.65", function() {
      expect(shapeInheritor._scaleVertices(mockVertices1)[0].x).toEqual(vertex1.x * SCALE_FACTOR);
    });

    it("scales the x-coordinate of the second vertex by 0.65", function() {
      expect(shapeInheritor._scaleVertices(mockVertices1)[1].x).toEqual(vertex2.x * SCALE_FACTOR);
    });

    it("scales the y-coordinate of the first vertex by 0.65", function() {
      expect(shapeInheritor._scaleVertices(mockVertices1)[0].y).toEqual(vertex1.y * SCALE_FACTOR);
    });

    it("scales the y-coordinate of the second vertex by 0.65", function() {
      expect(shapeInheritor._scaleVertices(mockVertices1)[1].y).toEqual(vertex2.y * SCALE_FACTOR);
    });
  });



});
