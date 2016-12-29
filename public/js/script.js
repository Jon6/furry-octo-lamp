var btstrpClasses = 'col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2';

$(document).ready(function() {

  // when form is submitted, send task to add to list
  $('#addTaskForm').submit(function(e) {
    // used to prevent reloading
    e.preventDefault();
    sendTask();
  });

  // load tasks that are in json file with getJSON
  $.getJSON('/getTasks/', function(data) {
    for (var i = 0; i < data.length; i++) {
      // $('#main-container').append('<div><p>' + data[i] + '</p></div>');
      addToMain(data[i]);
    }
  });
});

function sendTask() {
  // send to API to add to file and add to DOM so reloading isn't necessary
  var taskString = $('#taskString').val();
  $.post('/postTask/', { text: taskString }, function(data) {
    console.log(data);
  });
  addToMain(taskString);
  $('#taskString').val(""); // clear input
}

function addToMain(str) {
  $('<div><p class="main-font">- ' + str + '</p></div>').addClass(btstrpClasses).appendTo('#main-container');
}
