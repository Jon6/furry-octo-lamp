var btstrpClasses = 'col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2';
var deleteBtn = '<button type="button" class="btn btn-default btn-xs close-task"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>';

$(document).ready(function() {

  // load tasks that are in json file with getJSON
  $.getJSON('/getTasks/', function(data) {
    for (var key in data) {
      if (data.hasOwnProperty(key) && data[key] === 'open') {
        addToTable(key);
      }
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

  // something about being added dynamically makes this necessary
  $('#task-table-body').on('click', 'button.close-task', function() {
    $(this).parent().parent().fadeOut(250);
    closeTask($(this).parent().siblings('.second-font').html());
  });
});


function sendTask(taskString) {
  // send to API to add to file and add to DOM so reloading isn't necessary
  $.post('/postTask/', { task: taskString, status: 'open' }, function(data) {
    console.log(data);
    if (data.status !== 'duplicate') {
      addToTable(taskString);
    }
  });
  // clear input
  $('#taskString').val("");
}

function closeTask(taskString) {
  // send to API to add to file and add to DOM so reloading isn't necessary
  $.post('/closeTask/', { task: taskString, status: 'closed' }, function(data) {
    console.log(data);
  });
}

function addToTable(str) {
  $('<tr><td class="second-font">' + str + '</td><td>' + deleteBtn + '</td></tr>').appendTo('#task-table-body');
}
