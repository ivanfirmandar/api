'use strict';
module.exports = function (app) {
    var todoList = require('../controllers/controller');
    app.get('/tasks', todoList.listAllTasks);
    app.post('/tasks', todoList.create_a_task);
    app.get('/tasks/:taskid', todoList.read_a_task);
    app.put('/tasks/:taskid', todoList.update_a_task);
    app.delete('/tasks/:taskid', todoList.delete_a_task);

}