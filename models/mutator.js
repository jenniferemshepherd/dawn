'use strict';

(function(exports) {

  function Mutator() {

  }

  Mutator.prototype.isMutation = function() {
    return (Math.floor(Math.random() * 10) === 5);
  };

  exports.Mutator = Mutator;

})(this);
