'use strict';

function Gait() {
  
}

Gait.prototype.calculate = function() {
  return (0.01 * (0.5 -  Math.random()));
};

module.exports = Gait;
