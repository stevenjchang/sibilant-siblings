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

let writeQuestToDB = function(userID, quest) {
  // adds a new quest to the database, using restaurant IDs
  var defaultUserID = 1;
  var task1, task2, task3;
  // task1, task2, and task3 need to have assigned to them the id from the restaurants table of the restaurant being used as a quest task
  var questQueryData = [defaultUserID, task1, 0, task2, 0, task3, 0];
  db.query('INSERT INTO quests (creator, task1, task1Completed, task2, task2Completed, task3, task3Completed) VALUES (?, ?, ?, ?, ?, ?, ?)', questQueryData, function(err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

let writeRestaurantToDB = function(restaurant, callback) {
  // check whether restaurant is in DB
  if (true) {
    // if so, return restaurant ID
    // if not, add restaurant
    var restaurantQueryData = [restaurant.name, restaurant.id, restaurant.price, restaurant.rating, restaurant.location.address1, restaurant.location.zip_code];
    console.log('restaurantQueryData: ', restaurantQueryData);
    db.query('INSERT IGNORE INTO restaurants (name, yelpId, price, rating, address, zip_code) VALUES (?, ?, ?, ?, ?, ?)', restaurantQueryData, function(err, results) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  }   
};

let readQuestFromDB = function(userID, quest) {
  // uses inner join to read a quest from the DB (joining quests & restaurants tables)

};

let setProfilePrefsInDb = function(user, callback) {
  db.query('INSERT INTO users (username, password, location, preferences) VALUES (?, ?, ?, ?)', [user.username, user.password, user.location, user.preferences], function(err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

let setQuestInDb = function(dataFromYelp, callback) {
  var dataArray = [
    dataFromYelp[0].name,
    dataFromYelp[0].id,
    dataFromYelp[0].price,
    dataFromYelp[0].rating,
    dataFromYelp[0].location.address1,
    dataFromYelp[0].location.zip_code,
    dataFromYelp[1].name,
    dataFromYelp[1].id,
    dataFromYelp[1].price,
    dataFromYelp[1].rating,
    dataFromYelp[1].location.address1,
    dataFromYelp[1].location.zip_code,
    dataFromYelp[2].name,
    dataFromYelp[2].id,
    dataFromYelp[2].price,
    dataFromYelp[2].rating,
    dataFromYelp[2].location.address1,
    dataFromYelp[2].location.zip_code,
    1,
    dataFromYelp[0].id,
    dataFromYelp[1].id,
    dataFromYelp[2].id
  ];

  db.query('BEGIN; INSERT IGNORE INTO restaurants (name, yelpId, price, rating, address, zip_code)VALUES (?, ?, ?, ?, ?, ?); INSERT IGNORE INTO restaurants (name, yelpId, price, rating, address, zip_code) VALUES (?, ?, ?, ?, ?, ?); INSERT IGNORE INTO restaurants (name, yelpId, price, rating, address, zip_code) VALUES (?, ?, ?, ?, ?, ?); INSERT INTO quests (creator, task1, task1Completed, task2, task2Completed, task3, task3Completed) VALUES (?, (SELECT id FROM restaurants WHERE yelpId = ?), 0, (SELECT id FROM restaurants WHERE yelpId = ?), 0, (SELECT id FROM restaurants WHERE yelpId = ?), 0); COMMIT;', dataArray, function(err, results) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results)
    }
  });
}

module.exports.getUserPrefsFromDb = getUserPrefsFromDb;
module.exports.setProfilePrefsInDb = setProfilePrefsInDb;
module.exports.setQuestInDb = setQuestInDb;
module.exports.formatData = formatData;
module.exports.chooseTasks = chooseTasks;
module.exports.writeQuestToDB = writeQuestToDB;
module.exports.writeRestaurantToDB = writeRestaurantToDB;
module.exports.readQuestFromDB = readQuestFromDB;
