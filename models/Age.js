'use strict';

(function(exports) {

  var BIRTH_AGE = 0;

  function Age(birthday) {
    this._birthday = birthday;
  }

  Age.prototype.birthday = function () {
    return this._birthday;
  };

  Age.prototype.value = function(currentTime) {
    return currentTime - this._birthday;
  };

  exports.Age = Age;

})(this);
