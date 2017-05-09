const yelp = require('yelp-fusion');
const ApiSecrets = require('./apisecrets.js');
const token = ApiSecrets.yelpToken;

let getRestaurantsFromYelp = function(userPref, callback) {
  const id = 1; //hardcoding id for 1st user
  const location = userPref[0].location ? userPref[0].location : 94105;
  const preferences = userPref[0].preferences ? userPref[0].preferences : "italian, mexican";
  const client = yelp.client(token);

  client.search({
    location: location,
    term: preferences
  }).then(response => {
    let allResults = response.jsonBody.businesses;
    callback(null, allResults);
  }).catch(e => {
    callback(e, null);
  })
}

module.exports.getRestaurantsFromYelp = getRestaurantsFromYelp;