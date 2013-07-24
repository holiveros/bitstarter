var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.use('/images', express.static(__dirname + '/images'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));

app.get('/', function(request, response) {
  var buffer = new Buffer(fs.readFileSync('index.html'), "utf-8");
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
