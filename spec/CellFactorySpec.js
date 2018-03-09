'use strict';

describe("CellFactory", function() {
  var cellFactory;
  var cell;
  var cellRepository = {
    add: function() { return }
  };

  beforeEach(function() {
    cellFactory = new CellFactory();
  });

  it("can create a cell", function() {
    expect(cellFactory.create(cellRepository).body().type).toEqual('body')
  });

  it("stores it in the repository", function() {
    spyOn(cellRepository, 'add')
    cellFactory.create(cellRepository);
    expect(cellRepository.add).toHaveBeenCalled();
  });

});
