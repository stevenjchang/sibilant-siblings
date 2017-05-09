const yelp = require('yelp-fusion');
const ApiSecrets = require('./apisecrets.js');

const searchRequest = {
  term: 'restaurant chinese vegetarian',
  location: '94131',
  radius: 8000,
  price: '1,2,3,4',
  limit: 1
};

// yelp.accessToken(ApiSecrets.clientId, ApiSecrets.clientSecret).then(response => {
//   const client = yelp.client(response.jsonBody.access_token);

//   client.search(searchRequest).then(response => {
//     const allResults = response.jsonBody.businesses; //this will put all businesses in the location above into allresults
//     const prettyJson = JSON.stringify(allResults, null, 4);
//     console.log(prettyJson);
//   });
// }).catch(e => {
//   console.log(e);
// });

//insert token here

const token = '';

const ApiCall = function(req, res) {
  const location = req.body.zip ? req.body.zip : 94105;
  const categories = req.body.categories ? req.body.categories : 'italian';
  const client = yelp.client(token);
  
  client.search({
    location: location,
    categories: categories
  }).then(response => {
    allResults = response.jsonBody.businesses;
    res.send(allResults.slice(0, 3));
  }).catch(e => {
    res.send(e);
  });
};

yelp.accessToken(ApiSecrets.clientId, ApiSecrets.clientSecret).then(response => {
  const client = yelp.client(response.jsonBody.access_token);
  console.log('access_token: ', response.jsonBody.access_token);
  client.search(searchRequest).then(response => {
    const allResults = response.jsonBody.businesses; //this will put all businesses in the location above into allresults
    const prettyJson = JSON.stringify(allResults, null, 4);
    console.log(prettyJson);
  });
}).catch(e => {
  console.log(e);
});

module.exports = ApiCall;
