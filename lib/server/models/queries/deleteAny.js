"use strict";

module.exports = function (schema, id, cb) {
  schema.findByIdAndRemove(id, function (err, res) {
    if (err) return cb(err);
    return cb(null, res);
  });
};