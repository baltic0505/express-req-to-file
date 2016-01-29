# express-req-to-file
handdle request with given file

# to use
npm install --save express-req-to-file

# example in express
var reqToFile = require('express-req-to-file');

//cgi path
app.use(reqToFile('/cgi/app'));
app.use(reqToFile('/cgi/mobile'));

# your cgi file for example
/cgi/app/test.js

var doit = {};

doit['all'] = function(req, res, next){
  res.send('test : all');
};

doit['get'] = function(req, res, next){
  res.send('test: get');
};

doit['post'] = function(req, res, next){
  res.send('test: post');
};

module.exports = function(req, res, next){
  var method = req.method.toLowerCase();
  method = doit[method] ? method : 'all';
  doit[method](req, res, next);
};
