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

  decribe("#findCellByBodyId", function() {

    beforeEach(function() {
      cellRepository.add(mockCell)
    });

    it("returns the cell with corresponding body id", function() {

    });

  });

});
