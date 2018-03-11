'use strict';

(function(exports) {

  function CellRepository() {
    this._store = [];
  };

  CellRepository.prototype.store = function() {
    return this._store;
  };

  CellRepository.prototype.add = function(cell) {
    this._store.push(cell);
  };

  CellRepository.prototype.findCellByBodyId = function (id) {
    return this._store.find(function(cell) {
      return cell.body().id === id;
    });
  };

  exports.CellRepository = CellRepository;

})(this);
