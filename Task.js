//console.log('\nWelcome to CLITask. \n\t1 - Enter a Task\n\t2 - List all Tasks\n');


$(document).ready(function() {
    $('#addTask').submit(function(e) {
        e.preventDefault();
        addTask();
    });
});
