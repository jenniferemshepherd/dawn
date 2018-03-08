'use strict';

describe("CellRepository", function() {
  var cellRepository;
  var cell;

  beforeEach(function() {
    cellRepository = new CellRepository();
  });

  it("is created with an empty array", function() {
    expect(cellRepository.store()).toEqual([])
  });

  it("can hold a cell", function() {
    cellRepository.add(cell)
    expect(cellRepository.store()).toContain(cell)
  });

});
