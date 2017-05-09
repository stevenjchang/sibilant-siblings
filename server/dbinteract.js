const mysql = require('mysql');
const db = require('../db/dbconnect.js');

var myRestaurant = {
  name: 'Dylan\'s Other Restaurant',
  price: 2,
  rating: 3,
  location: '90210'
};

// var insertNewRestaurant = function(restaurant, cb) {
//   db.connection.query('INSERT INTO restaurants (name, priceRange, rating, location) VALUES (:name, :price, :rating, :location)', {
//     name: myRestaurant.name,
//     price: myRestaurant.price,
//     rating: myRestaurant.rating,
//     location: myRestaurant.location
//   }, function(err, results, fields) {
//     if (err) {
//       cb(err, false);
//     }
//     cb(null, true);
//   });
// };

db.connection.query('INSERT INTO restaurants (name, priceRange, rating, location) VALUES ("Dylan\'s Fake Restaurant", 2, 3, "90210");', function(err, results) {
  if (err) {
    throw err;
  }
  console.log(results);
});

// insertNewRestaurant(myRestaurant, console.log);

db.connection.query('SELECT * FROM restaurants', function(err, results) {
  if (err) {
    throw err;
  }
  console.log(results);
});

db.connection.end();
