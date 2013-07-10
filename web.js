var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var buffer = fs.readFileSync('index.html');
  var index = Buffer.toString(buffer,'utf-8');
  response.send(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
