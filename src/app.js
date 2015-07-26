/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var ajax = require('ajax');
//var Vector2 = require('vector2');

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
  var URL = 'http://drupalreleasedate.com/data/samples.json?limit=1';
  
  criticalsCard.subtitle('checking issues');
  criticalsCard.body('Crits: ');

  ajax({url: URL, type: 'json'},
    function(json) {
      // Data is supplied here.
      console.log(json);
      var d = json.data[0];
      console.log (d);
      var crits = d.critical_bugs + d.critical_plans + d.critical_rtbc + d.critical_tasks;
      criticalsCard.subtitle(d.when.split('T')[0]);
      criticalsCard.body('Crits: ' + crits + 
                         "\nBugs: " + d.critical_bugs +
                         "\nPlans: " + d.critical_plans +
                         "\nTasks: " + d.critical_tasks +
                         "\nRTBC: " + d.critical_rtbc
                        );
    },
    function(error, statusCode) {
      console.log (statusCode);
      console.log (error);
      criticalsCard.subtitle('AJAX...');
      criticalsCard.body('...error');
    }
  );
  
}
