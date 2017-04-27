const yelp = require('yelp-fusion');

// Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const clientId = '';
const clientSecret = '';

const searchRequest = {
  // term: 'Four Barrel Coffee',
  location: 'san francisco, ca'
};

yelp.accessToken(clientId, clientSecret).then(response => {
  const client = yelp.client(response.jsonBody.access_token);

  client.search(searchRequest).then(response => {
    const allResults = response.jsonBody.businesses; //this will put all businesses in the location above into allresults
    const prettyJson = JSON.stringify(allResults, null, 4);
    console.log(prettyJson);
  });
}).catch(e => {
  console.log(e);
});