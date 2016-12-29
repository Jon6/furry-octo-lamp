var btstrpClasses = 'col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2';

$(document).ready(function() {

  // when form is submitted, send task to add to list
  $('#addTaskForm').submit(function(e) {
    // used to prevent reloading
    // e.preventDefault();
    sendTask();
  });

  // load tasks that are in json file with getJSON
  $.getJSON('/getTasks/', function (data){
    for (var i = 0; i < data.length; i++) {
      // $('#main-container').append('<div><p>' + data[i] + '</p></div>');
      $('<div><p class="main-font">- ' + data[i] + '</p></div>').addClass(btstrpClasses).appendTo('#main-container');
    }
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
