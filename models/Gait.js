'use strict';

(function(exports) {

  function Gait() {
    
  };

  Gait.prototype.calculate = function() {
    return (0.005 * (0.5 -  Math.random()))
  };

  exports.Gait = Gait;

})(this);
