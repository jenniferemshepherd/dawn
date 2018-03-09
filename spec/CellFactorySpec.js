'use strict';

describe("CellFactory", function() {
  var cellFactory;
  var cell;
  var simulation = {
    addToWorld: function() { return }
  };
  var cellRepository = {
    add: function() { return }
  };

  describe("#create", function() {

    beforeEach(function() {
      cellFactory = new CellFactory(simulation);
    });

    it("can create a cell", function() {
      expect(cellFactory.create(cellRepository).body().type).toEqual('body');
    });

    it("stores it in the repository", function() {
      spyOn(cellRepository, 'add');
      cellFactory.create(cellRepository);
      expect(cellRepository.add).toHaveBeenCalled();
    });

    it("adds the cell to the world", function() {
      spyOn(simulation, 'addToWorld');
      cellFactory.create(cellRepository);
      expect(simulation.addToWorld).toHaveBeenCalled();
    });
  });

});
