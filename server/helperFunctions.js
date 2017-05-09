const yelp = require('yelp-fusion');
const db = require('./../db/dbconnect.js').connection;

var formatData = function(restaurants) {
  var formattedData = [];
  // for each restaurant element in restaurants
    //  {
      // yelpId:
      // name:
      // rating:
      // price:
      // location:  (might want to use display_address here - it's an array)
        // address:
        // zip_code:
    //  }
  return formattedData;
};

var chooseTasks = function(restaurants, size) {
  var tasks = [];
  var numTasks = size || 3;

  for (var i = 0; i < numTasks; i++) {
    var random = Math.floor( Math.random() * numTasks );
    tasks.push( restaurants[random] );
  }
  return tasks;
};

let getQuestFromDb = function(user, callback) {
  let id = user.id ? user.id : 1;
  db.query('SELECT * FROM users WHERE id = ?', id, function(err, results) {
    if (err) {
      callback(err, null)
    } else {
      callback(null, results)
    }
  })
}

module.exports.getQuestFromDb = getQuestFromDb;
module.exports.formatData = formatData;
module.exports.chooseTasks = chooseTasks;
