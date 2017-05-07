

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

var chooseTasks = function(restaurants) {
  var tasks = [];
  const numTasks = 3;

  for (var i = 0; i < numTasks; i++) {
    var random = Math.floor( Math.random() * numTasks );
    tasks.push( restaurants[random] );
  }
  return tasks;
};

module.exports.formatData = formatData;
module.exports.chooseTasks = chooseTasks;