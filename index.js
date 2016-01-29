var fs = require('fs');
var path = require('path');

var cwd = process.cwd();

module.exports = function(dir){
  return function(req, res, next){
    if(req.path.slice(0, dir.length) !== dir){
      next();
      return;
    }
    var realPath = path.join(cwd, req.path);
    if(!path.extname(realPath)){
      realPath = realPath + '.js';
    }
    fs.exists(realPath, function(exists){
      if(!exists){
        next();
        return;
      }
      require(realPath)(req, res, next);
    });
  }
};
