'use strict';

(function(exports) {

  function Notes() {
    this._noteArray = [830.609, 932.328, 1046.50, 1108.73, 1244.51, 1396.91, 1567.98, 1661.22]
  };

  Notes.prototype.array = function() {
    return this._noteArray;
  };

  Notes.prototype.choose = function() {
    return this._noteArray[Math.floor(Math.random() * this._noteArray.length)];
  };

exports.Notes = Notes;

})(this);
