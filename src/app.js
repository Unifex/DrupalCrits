/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
//var ajax = require('ajax');
var Vector2 = require('vector2');

var wind = new UI.Window({ fullscreen: true });
var image = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  image: 'https://cloudpebble.net/ide/project/221261#'
});
wind.add(image);
wind.show();
/*
var criticalsCard = new UI.Card({
  title: 'Drupal Crits',
  subtitle: 'querying issues',
  body: 'Crits: updating...'
});
criticalsCard.show();
// Update the data.
criticalsCard.on('click', 'up', function(e) {
  console.log('up click');
  updateCard();
});

// Update the card.
//updateCard();

function updateCard () {
  console.log('updateCard');
  //var URL = 'http://drupalreleasedate.com/data/samples.json?limit=1';
  
  // Show the splash screen.
  
  criticalsCard.subtitle('querying issues');
  criticalsCard.body('Crits: ');
  
  criticalsCard.subtitle('');
  criticalsCard.body('Crits: ' + getRandomInt(0, 43));
  
  
  ajax({url: URL, type: 'json'},
    function(json) {
      console.log(json);
      // Data is supplied here.
      var d = json.data[0];
      var crits = d.critical_bugs + d.critical_plans + d.critical_rtbc + d.critical_tasks;
      criticalsCard.subtitle = '';
      criticalsCard.body = 'Crits: ' + crits;
      criticalsCard.show();
      criticalsSplash.hide();
      
    },
    function(error, statusCode) {
      criticalsSplash.body = 'Crits: error';
      criticalsSplash.show();
      criticalsCard.hide();
      console.log ('statusCode: ' + statusCode);
      console.log('Ajax failed: ' + error);
    }
  );
  
}
*/

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
