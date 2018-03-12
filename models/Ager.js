'use strict';

(function(exports) {

  function Ager(cellRepository) {
    this._cellRepository = cellRepository;
  };

  Ager.prototype.action = function(event) {
    this._cellRepository.store().forEach(function(cell) {
      cell.age().increment()
    }.bind(this));
  };

  exports.Ager = Ager;
})(this);
