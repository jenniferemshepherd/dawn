'use strict';

function Mutator() {

}

Mutator.prototype.isMutation = function() {
  return (Math.floor(Math.random() * 10) === 5);
};

module.exports = Mutator;
