var express = require('express'),
    app = express(),
    port = 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/model'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/Tododb', {
    useNewUrlParser: true
});


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);