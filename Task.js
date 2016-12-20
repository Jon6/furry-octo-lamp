const express = require('express');
const fs = require('fs');

// load file using fs package
var data = fs.readFileSync('taskList.json');
var tasks = JSON.parse(data);


// start express server
var app = express();
var server = app.listen(3000, listening);

function listening() {
  console.log('Listening...');
}


// host static directory with webpage in it that is interface to app
app.use(express.static('public'));


// begining of API which gives listed stuffin DB
app.get('/getTasks/:taskNum?/', returnTasks);

function returnTasks(request, response) {
  if (request.params.taskNum !== undefined) {
    response.send(tasks[request.params.taskNum]);
  } else {
    response.send(tasks);
  }
}


// simple adding from variable in string
app.get('/addTask/:newTask/', addTask);

function addTask(request, response) {
  tasks.push(decodeURI(request.params.newTask));
  fs.writeFile('taskList.json', JSON.stringify(tasks, null, 2), function(err) {
    response.send({ newTask: request.params.newTask, status: 'success' });
  });
}
