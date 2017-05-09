var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var ApiCall = require('./../apicall.js');
var getQuestFromDb = require('./helperFunctions.js').getQuestFromDb;
var getRestaurantsFromYelp = require('./../apicall.js').getRestaurantsFromYelp;

app.use(express.static(path.join(__dirname, '../client/')));
app.use(express.static(path.join(__dirname, '../db/')));

var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

app.use (morgan('dev'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/getRestaurants', function(req, res) {
  res.send('hey');
});

app.post('/', function (req, res) {
  console.log('*** req.body *** >server.js --> ', req.body);
  // res.send('POST request received inside server.js');
  res.send(req.body);
});

app.get('/quest', function (req, res) {
  getQuestFromDb(req.body, function(err, result) {
    if(err) {
      console.log('error from getQuestFromDb, inside server.js');
    } else {
      getRestaurantsFromYelp(result, function(err, result) {
        if(err) {
          console.log('error from getRestaurantsFromYelp, inside server.js');
        } else {
          res.send(result);
        }
      })
    }
  })
})

app.post('/quest', function (req, res) {
  console.log("SERVER", req.body);
  res.send(req.body);
  // ApiCall(req, res);
});



app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
