var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var db;
var USERS_COLLECTION = "users";

var path =require("path");
var distDir =  path.join(__dirname , '/../' , '/../', '/dist/');
var registerPath = '/register';

module.exports = (app)=>{
  app.use(express.static(distDir));
console.log(distDir);
  mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");
});

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
    db.collection(USERS_COLLECTION).insertOne(newUser, function(err, doc) {
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
