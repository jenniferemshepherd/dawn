'use strict';

describe("CellRepository", function() {
  var cellRepository;
  var mockBody = {
    id: 3
  };
  var mockCell = {
    body: function() { return mockBody }
  };

  beforeEach(function() {
    cellRepository = new CellRepository();
  });

  it("is created with an empty array", function() {
    expect(cellRepository.store()).toEqual([])
  });

  describe("#add", function() {

    beforeEach(function() {
      cellRepository.add(mockCell)
    });

    it("can hold a cell", function() {
      expect(cellRepository.store()).toContain(mockCell)
    });

  });

  describe("#remove", function() {

    beforeEach(function() {
      cellRepository.add(mockCell)
    });

    it("can take a cell out of the store", function() {
      cellRepository.remove(mockCell)
      expect(cellRepository.store()).not.toContain(mockCell)
    });

  });

  describe("#findCellByBodyId", function() {

    beforeEach(function() {
      cellRepository.add(mockCell)
    });

    it("returns the cell with corresponding body id", function() {
      expect(cellRepository.findCellByBodyId(3)).toEqual(mockCell);
    });

  });

});
