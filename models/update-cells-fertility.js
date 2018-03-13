(function(exports) {

  function UpdateCellsFertility(cellRepository) {
    this._cellRepository = cellRepository
  }

  UpdateCellsFertility.prototype.action = function (event) {
    this._cellRepository.store().forEach(function(cell) {
      if (cell.age().value() > 300) {
        cell.makeFertile();
      };
    });
  };

  exports.UpdateCellsFertility = UpdateCellsFertility;

})(this);
