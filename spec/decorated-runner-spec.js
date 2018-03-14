'use strict';

describe("DecoratedRunner", function() {
  var runner;
  var matterRunner = {

  };

  beforeEach(function() {
    runner = new DecoratedRunner(matterRunner)
  });

  it("stores an instance of matterRunner", function() {
    expect(runner.matterRunner()).toEqual(matterRunner)
  });

});
