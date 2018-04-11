'use strict';

const Age = require('../properties/age');

describe("Age", function() {
  var age;
  var mockBirthday = 3000;
  var mockCurrentTime = 5000;

  beforeEach(function() {
    age = new Age(mockBirthday);
  });

  it("is initiated with a birthday", function() {
    expect(age.birthday()).toEqual(mockBirthday);
  });

  it("#value() returns current age", function() {
    expect(age.value(mockCurrentTime)).toEqual(mockCurrentTime - mockBirthday);
  });
});
