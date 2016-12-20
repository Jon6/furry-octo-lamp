$(document).ready(function() {
  // when form is submitted, send task to add to file
  console.log('ready');
  $('#addTaskForm').submit(function(e) {
    e.preventDefault();
    console.log('about to send');
    sendTask();
  });
});

function sendTask() {
  var taskStringURL = '/addTask/' + encodeURI($('#taskString').val());
  console.log(taskStringURL);
  $.getJSON(taskStringURL, function(data) {
    console.log(data);
  });
}
