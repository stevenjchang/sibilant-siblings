var express = require('express')
var app = express()
var bodyparser = require('body-parser');

app.get('/', function (req, res) {
  res.send('get request received');
})

app.post('/', function (req, res) {
  res.send('post request received');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})