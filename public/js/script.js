var btstrpClasses = 'col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2';
var deleteBtn = '<button type="button" class="btn btn-default btn-xs delete-task"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>';

$(document).ready(function() {

  // load tasks that are in json file with getJSON
  $.getJSON('/getTasks/', function(data) {
    var taskArray = Object.keys(data);
    for (var i = 0; i < taskArray.length; i++) {
      addToTable(taskArray[i]);
    }
  });

  // when form is submitted, send task to add to list
  $('#addTaskForm').submit(function(e) {
    // used to prevent reloading
    e.preventDefault();

    var taskString = $('#taskString').val();
    if (taskString !== "") {
      sendTask(taskString);
    }
  });
});


function sendTask(taskString) {
  // send to API to add to file and add to DOM so reloading isn't necessary
  var params = {};
  params[taskString] = 'open';
  $.post('/postTask/', params, function(data) {
    console.log(data);
  });
  addToTable(taskString);
  $('#taskString').val(""); // clear input
}

function addToTable(str) {
  $('<tr><td class="second-font">' + str + '</td><td>' + deleteBtn + '</td></tr>').appendTo('#task-table-body');
}

// function addToMain(str) {  // old deprecated version of addToTable
//   $('<div><p class="main-font">- ' + str + '</p>' + deleteBtn + '</div>').addClass(btstrpClasses).appendTo('#main-container');
// }
