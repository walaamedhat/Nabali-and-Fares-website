module.exports = (schema, id, cb) =>{
  schema.findByIdAndRemove(id, (err, res) => {
    if (err) return cb(err);
    return cb(null, res);
  });
}
