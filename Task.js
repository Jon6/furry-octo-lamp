const express = require('express');

var tasks = ['Eat something', 'Go to the Gym'];

var app = express();
var server = app.listen(3000, listening);

function listening() {
    console.log('Listening...');
}

//to be expanded upon
app.use(express.static('public'));

app.get('/getTasks/:taskNum', returnTasks);

function returnTasks(request, response) {
    if (request.params.taskNum !== null) {
        response.send(tasks[taskNum]);
    } else {
        response.send(tasks);
    }
}
