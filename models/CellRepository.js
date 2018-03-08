'use strict';

(function(exports) {

  function CellRepository() {
    this._store = []
  };

  CellRepository.prototype.store = function() {
    return this._store;
  };

  CellRepository.prototype.add = function(cell) {
    this._store.push(cell)
  };

  exports.CellRepository = CellRepository;

})(this);
