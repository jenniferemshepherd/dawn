'use strict';

function CellRepository() {
  this._store = [];
}

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

CellRepository.prototype.remove = function(cell) {
  this._store.splice(this._store.indexOf(cell), 1);
};

module.exports = CellRepository;
