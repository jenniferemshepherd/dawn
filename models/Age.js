'use strict';

(function(exports) {

  var BIRTH_AGE = 0

  function Age() {
    this._value = BIRTH_AGE
  };

  Age.prototype.value = function() {
    return this._value
  };

  Age.prototype.increment = function() {
    this._value += 1
  };

  exports.Age = Age;

})(this);
