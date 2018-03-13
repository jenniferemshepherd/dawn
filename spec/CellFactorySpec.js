'use strict';

describe("CellFactory", function() {
  var cellFactory;
  var mockCell = {
    makeInfertile: function() { return }
  };
  var mockSimulation = {
    addToWorld: function() { return }
  };
  var mockCellRepository = {
    add: function() { return }
  };

  beforeEach(function() {
    cellFactory = new CellFactory(mockSimulation, mockCellRepository);
  });

  describe("#create", function() {

    beforeEach(function() {
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

  describe("#createFromParents", function() {

    beforeEach(function() {
      spyOn(mockCell, 'makeInfertile');
      cellFactory.createFromParents(mockCell, mockCell);
    });

    it("sets the parent cells' fertility to false", function() {
      expect(mockCell.makeInfertile).toHaveBeenCalledTimes(2);
    });

  });

});
