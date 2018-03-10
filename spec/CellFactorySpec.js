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

  describe("#create", function() {

    beforeEach(function() {
      cellFactory = new CellFactory(mockSimulation, mockCellRepository);
      spyOn(mockCellRepository, 'add');
      spyOn(mockSimulation, 'addToWorld');
    });

    it("can create a cell", function() {
      expect(cellFactory.create().body().type).toEqual('body');
    });

    it("stores it in the repository", function() {
      cellFactory.create();
      expect(mockCellRepository.add).toHaveBeenCalled();
    });

    it("adds the cell to the world", function() {
      cellFactory.create();
      expect(mockSimulation.addToWorld).toHaveBeenCalled();
    });
  });

});
