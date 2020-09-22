'use strict';
module.exports = function (app) {
    var todoList = require('../controllers/controller');
    app.get('/tasks', todoList.listAllTasks);
    app.post('/tasks', todoList.create_a_task);
}