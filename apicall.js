const yelp = require('yelp-fusion');

// Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const clientId = '';
const clientSecret = '';

const searchRequest = {
  // term: 'Four Barrel Coffee',
  location: 'san francisco, ca'
};

// yelp.accessToken(clientId, clientSecret).then(response => {
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
const token = "4iysnX9j967AeRyuRTTGBllbcW64UkOKo3WfnWe_gymDsOzUVMGYJmML5L9wVzsgMnnQjExWFgQ1ZnV2Zub0QDvPpOYwYknTlguYSQ7oueUFe1EPN8LX5bZ31ID_WHYx";

const ApiCall = function(req, res) {
  const location = req.body.zip ? req.body.zip : 94105;
  const categories = req.body.categories ? req.body.categories : "italian";
  const client = yelp.client(token);
  
  client.search({
    location: location,
    categories: categories
  }).then(response => {
    allResults = response.jsonBody.businesses;
    res.send(allResults.slice(0,3));
  }).catch(e => {
    res.send(e)
  })
}

module.exports = ApiCall;