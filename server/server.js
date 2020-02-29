var express = require("express");
var bodyParser = require("body-parser");
const secret='secret';
var cookieParser= require("cookie-parser");


var app = express();
app.use(bodyParser.json());

app.use(cookieParser(secret));
// Create link to Angular build directory
var distDir =  __dirname + '/../' + '/dist/';
app.use(express.static(distDir));

require('./routes/contacts-routes.js')(app);
require('./routes/login-routes.js')(app);
require('./routes/posts-rooutes.js')(app);
require('./routes/register-routes')(app);
