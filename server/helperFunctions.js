const yelp = require('yelp-fusion');
const db = require('./../db/dbconnect.js').connection;

var chooseTasks = function(restaurants, size) {
  var tasks = [];
  var numTasks = size || 3;

  for (var i = 0; i < numTasks; i++) {
    var random = Math.floor( Math.random() * restaurants.length );
    tasks.push( restaurants.splice(random, 1)[0] );
  }
  return tasks;
};

let getUserPrefsFromDb = function(user, callback) {
  let id = user.id ? user.id : 1;
  db.query('SELECT * FROM users WHERE id = ?', id, function(err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

let setProfilePrefsInDb = function(user, callback) {
  // This function is not being used in the app, because the multi-user & sessions were never implemented.
  // Only the funcion below, updateProfilePrefsInDb is being used to update user data for the single user.
  var queryData = [user.username, user.password, user.location, user.preferences];
  db.query('INSERT INTO users (username, password, location, preferences) VALUES (?, ?, ?, ?)', queryData, function(err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

let updateProfilePrefsInDb = function(user, callback) {
  var queryData = [user.location, user.preferences, user.username];
  db.query('UPDATE users SET location = ?, preferences = ? WHERE username = ?', queryData, function(err, results) {
    if (err) {
      console.log('update error: ', err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

let setQuestInDb = function(dataFromYelp, callback) {
  var defaultUserID = 1;
  var queryData = [];
  for (var i = 0; i < dataFromYelp.length; i++) {
    queryData.push(dataFromYelp[i].name);
    queryData.push(dataFromYelp[i].id);
    queryData.push(dataFromYelp[i].price);
    queryData.push(dataFromYelp[i].rating);
    queryData.push(dataFromYelp[i].location.address1);
    queryData.push(dataFromYelp[i].location.zip_code);
  }
  queryData.push(defaultUserID);
  for (var i = 0; i < dataFromYelp.length; i++) {
    queryData.push(dataFromYelp[i].id);
  }

  var queryStringBegin = 'BEGIN; ';
  var queryStringInsertRestaurant = 'INSERT IGNORE INTO restaurants (name, yelpId, price, rating, address, zip_code) VALUES (?, ?, ?, ?, ?, ?); ';
  var queryStringInsertQuestFields = 'INSERT INTO quests (creator, task1, task1Completed, task2, task2Completed, task3, task3Completed) ';
  var queryStringInsertQuestValues = 'VALUES (?, (SELECT id FROM restaurants WHERE yelpId = ?), 0, (SELECT id FROM restaurants WHERE yelpId = ?), 0, (SELECT id FROM restaurants WHERE yelpId = ?), 0); ';
  var fullQueryString = queryStringBegin.concat(queryStringInsertRestaurant, queryStringInsertRestaurant, queryStringInsertRestaurant, queryStringInsertQuestFields, queryStringInsertQuestValues, 'COMMIT;');

  db.query(fullQueryString, queryData, function(err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.getUserPrefsFromDb = getUserPrefsFromDb;
module.exports.setProfilePrefsInDb = setProfilePrefsInDb;
module.exports.updateProfilePrefsInDb = updateProfilePrefsInDb;
module.exports.setQuestInDb = setQuestInDb;
module.exports.chooseTasks = chooseTasks;
