var express = require('express')
var bodyParser = require('body-parser')
var mongodb = require('mongodb')
//var ObjectID = mongodb.ObjectID
var  db = require('../db')
//var USERS_COLLECTION = 'users';

var path = require('path')
var distDir = path.join(__dirname, '/../', '/../', '/dist/')
var usersPath = '/login'
const jwt = require('../jwt')

module.exports = (app) => {
  app.use(express.static(distDir))

  app.get('/api/users', function (req, res) {
    db.users.find({}).toArray(function (err, docs) {
      if (err) {
        handleError(res, err.message, 'Failed to get users.')
      } else {
        res.status(200).json(docs)
      }
    })
  })

  // Generic error handler used by all endpoints.
  function handleError (res, reason, message, code) {
    console.log('ERROR: ' + reason)
    res.status(code || 500).json({ error: message })
  }

  app.post(usersPath, function (req, res) {
    var newUser = req.body

    console.log('current user in server: ' + newUser.username + ' ' + newUser.password)
    // newUser.createDate = new Date();

    if (!req.body.username) {
      handleError(res, 'Invalid user input', 'Must provide a name.', 400)
    } else {
      var currUser = db.users.findOne({ username: newUser.username,password:newUser.password })
      currUser.then(u =>{
        if(!u)
        handleError(res, 'Invalid user input', 'Err in name or pass.', 400);
        else
        success(res,u)
      })
    }
  })

function success(res,u){
  const token = jwt.createToken({ id: u._id })
  res.cookie('userCookie', token).send(u)
}


}
