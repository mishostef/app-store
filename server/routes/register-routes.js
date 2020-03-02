var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var db = require('../db');
//var USERS_COLLECTION = "users";

var path =require("path");
var distDir =  path.join(__dirname , '/../' , '/../', '/dist/');
var registerPath = '/register';

module.exports = (app)=>{
  app.use(express.static(distDir));
console.log(distDir);

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.post(registerPath, function(req, res) {
  var newUser = req.body;

  console.log('new user in server: ');
  //newUser.createDate = new Date();
console.log(JSON.stringify(newUser));
  if (!req.body.username) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  } else {
    db.users.insertOne(newUser, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new post.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});


app.get("*", function(req, res) {
      res.sendFile('index.html',{root:distDir});

});


}
