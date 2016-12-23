$(document).ready(function() {
  // when form is submitted, send task to add to list
  $('#addTaskForm').submit(function(e) {
    // used to prevent reloading
    // e.preventDefault();
    sendTask();
  });

  // load tasks that are in json file with getJSON
  $.getJSON('/getTasks/', function (data){
    console.log(data);
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
