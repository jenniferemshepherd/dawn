'use strict';

describe("CellFactory", function() {
  var cellFactory;
  var mockCell;
  var mockSimulation = {
    addToWorld: function() { return }
  };
  var mockCellRepository = {
    add: function() { return }
  };
  var mockShapeInheritor = {
    childVertices: function() { return }
  }

  describe("#create", function() {

    beforeEach(function() {
      cellFactory = new CellFactory(mockSimulation, mockCellRepository);
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
