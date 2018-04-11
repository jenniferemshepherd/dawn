'use strict';

const DecoratedRunner = require('../decorators/decorated-runner');

describe("DecoratedRunner", function() {
  var decoratedRunner;
  var mockMatterRunner = {};

  beforeEach(function() {
    decoratedRunner = new DecoratedRunner(mockMatterRunner)
  });

  it("stores an instance of matterRunner", function() {
    expect(decoratedRunner.matterRunner()).toEqual(mockMatterRunner);
  });

});
