'use strict';

describe("Age", function() {
  var age;

  beforeEach(function() {
    age = new Age();
  });

  it("is initiated with an age value of 0", function() {
    expect(age._value).toEqual(0)
  });
});
