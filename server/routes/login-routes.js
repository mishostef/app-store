var express = require('express')
var bodyParser = require('body-parser')
var mongodb = require('mongodb')
var ObjectID = mongodb.ObjectID
var db
var USERS_COLLECTION = 'users';

var path = require('path')
var distDir = path.join(__dirname, '/../', '/../', '/dist/')
var usersPath = '/login'
const jwt = require('../jwt')

module.exports = (app) => {
  app.use(express.static(distDir))
  mongodb.MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test', function (err, client) {
    if (err) {
      console.log(err)
      process.exit(1)
    }

    // Save database object from the callback for reuse.
    db = client.db()
    console.log('Database connection ready')
  })

  app.get('/api/users', function (req, res) {
    db.collection(USERS_COLLECTION).find({}).toArray(function (err, docs) {
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
      var currUser = db.collection(USERS_COLLECTION).findOne({ username: newUser.username })
      currUser.then(u => {
        console.log(`yes! ${JSON.stringify(u)}`)
        const token = jwt.createToken({ id: u._id })
        res.cookie('userCookie', token).send(u)
      })
    }
  })

}
