var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");

var PORT = process.env.PORT || 8044;


// create application/json parser
//var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true}));

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));

// parse various different custom JSON types as JSON
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

// parse various different custom JSON types as JSON
app.use(bodyParser.text({ type: 'text/html' }));

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);


app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});

