var express = require('express'),
    app = express(),
    port = 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/model'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/Tododb', {
    useNewUrlParser: true
});


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


var routes = require('./api/routes/routes');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);