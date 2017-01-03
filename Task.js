const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

// load file using fs package
var tasks = JSON.parse(fs.readFileSync('taskList.json'));


// start express server
var app = express();
var server = app.listen(3000, listening);

function listening() {
  console.log('Running...');
}


// host static directory with webpage in it that is interface to app
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());



// begining of API which gives listed stuffin 'DB'
app.get('/getTasks/', returnTasks);

function returnTasks(request, response) {
  response.send(tasks);
}


// adding with post method
app.post('/postTask', postTask);

function postTask(request, response) {
  console.log(request.body);
  var key = Object.keys(request.body);
  console.log(key, key[0]);
  tasks[key] = request.body.key[0];
  fs.writeFile('taskList.json', JSON.stringify(tasks, null, 2), function(err) {
    response.send({ newTask: request.body, status: 'success' });
  });
}



// simple adding from variable in string - Not used by script.js anymore
app.get('/addTask/:newTask/', addTask);

function addTask(request, response) {
  tasks.push(decodeURI(request.params.newTask));
  fs.writeFile('taskList.json', JSON.stringify(tasks, null, 2), function(err) {
    response.send({ newTask: request.params.newTask, status: 'success' });
  });
}
