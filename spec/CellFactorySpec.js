'use strict';

describe("CellFactory", function() {
  var cellFactory;
  var mockCell = {
    makeInfertile: function() { return },
    isFertile: function() { return true }
  };
  var mockSimulation = {
    addToWorld: function() { return }
  };
  var mockCellRepository = {
    add: function() { return }
  };
  var mockShapeInheritor = {
    childVertices: function() { return }
  };
  var mockPositionInheritor = {
    x: function() { return },
    y: function() { return }
  };
  var mockColourInheritor = {
    colourMixer: function() { return }
  };
  var mockBodyModule = {
    fromVertices: function() { return }
  };

  beforeEach(function() {
    cellFactory = new CellFactory(
      mockSimulation,
      mockCellRepository,
      mockPositionInheritor,
      mockShapeInheritor,
      mockColourInheritor,
      mockBodyModule
    );
  });

  describe("#create", function() {

    beforeEach(function() {
      spyOn(mockCellRepository, 'add');
      spyOn(mockSimulation, 'addToWorld');
    });

    it("can create a cell", function() {
      expect(cellFactory.createCircle().body().type).toEqual('body');
    });

    it("stores it in the repository", function() {
      cellFactory.createCircle();
      expect(mockCellRepository.add).toHaveBeenCalled();
    });

    it("adds the cell to the world", function() {
      cellFactory.createCircle();
      expect(mockSimulation.addToWorld).toHaveBeenCalled();
    });
  });

});
