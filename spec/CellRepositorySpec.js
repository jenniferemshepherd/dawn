'use strict';

describe("CellRepository", function() {
  var cellRepository;
  var mockCell;

  beforeEach(function() {
    cellRepository = new CellRepository();
  });

  it("is created with an empty array", function() {
    expect(cellRepository.store()).toEqual([])
  });

  it("can hold a cell", function() {
    cellRepository.add(mockCell)
    expect(cellRepository.store()).toContain(mockCell)
  });

  decribe("#findCellByBodyId", function() {

    it("returns the cell with corresponding body id", function() {



    });

  });

});
