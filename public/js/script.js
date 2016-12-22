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
  // var taskStringURL = '/addTask/' + encodeURI($('#taskString').val());
  // console.log($('#taskString').val());
  // $.getJSON(taskStringURL, function(data) {
  //   console.log(data);
  // });
  var taskString = $('#taskString').val();
  $.post('/postTask/', { text: taskString }, function(data) {
    console.log(data);
  });
}
