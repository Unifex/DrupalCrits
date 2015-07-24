/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var ajax = require('ajax');
//var Vector2 = require('vector2');
var URL = 'http://drupalreleasedate.com/data/samples.json?limit=1';

var criticalsCard = new UI.Card({
  title: 'Drupal Crits',
  subtitle: 'querying issues',
  body: 'Crits: updating...'
});
criticalsCard.show();

updateCard();

// Update the data.
criticalsCard.on('click', 'up', function(e) {
  console.log('up click');
  updateCard();
});

function updateCard () {
  criticalsCard.subtitle('checking issues');
  criticalsCard.body('Crits: ');

  ajax({url: URL, type: 'json'},
    function(json) {
      // Data is supplied here.
      var d = json.data[0];
      var crits = d.critical_bugs + d.critical_plans + d.critical_rtbc + d.critical_tasks;
      criticalsCard.subtitle('');
      criticalsCard.body('Crits: ' + crits);
    },
    function(error, statusCode) {
      criticalsCard.subtitle('AJAX...');
      criticalsCard.body('...error');
    }
  );
  
}
