var express = require('express');
var app = express();
var phrase = require('./phrase');

app.use(express.static(__dirname));
console.log(__dirname);

app.get('/phrase', function(req, res) {
  res.send(phrase.outlanderPhrase[Math.floor(Math.random() * phrase.outlanderPhrase.length)]);
});

// var server = app.listen(3000, function() {
//   var port = server.address().port;
//   console.log('Listening at http://localhost:%s', port);
// });
