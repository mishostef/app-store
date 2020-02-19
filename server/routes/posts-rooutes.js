var express = require('express')
var bodyParser = require('body-parser')
var mongodb = require('mongodb')
var ObjectID = mongodb.ObjectID
var db
var POSTS_COLLECTION = 'posts'

var path = require('path')
var distDir = path.join(__dirname, '/../', '/../', '/dist/')
var usersPath = '/posts'

module.exports = (app) => {
  app.use(express.static(distDir))
  console.log(distDir)
  mongodb.MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test', function (err, client) {
    if (err) {
      console.log(err)
      process.exit(1)
    }

    // Save database object from the callback for reuse.
    db = client.db()
    console.log('Database connection ready')
  })

  app.get('/api/posts', function (req, res) {
    db.collection(POSTS_COLLECTION).find({}).toArray(function (err, docs) {
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
    var newPost = req.body

    console.log('new post in server: ')
    // newUser.createDate = new Date();
    console.log(JSON.stringify(newPost))
    if (!req.body.author) {
      handleError(res, 'Invalid user input', 'Must provide a name.', 400)
    } else {
      db.collection(POSTS_COLLECTION).insertOne(newPost, function (err, doc) {
        if (err) {
          handleError(res, err.message, 'Failed to create new post.')
        } else {
          res.status(201).json(doc.ops[0])
        }
      })
    }
  })

  app.get('/api/products', function (req, res) {
    db.collection('products').find({}).toArray(function (err, docs) {
      if (err) {
        handleError(res, err.message, 'Failed to get products.')
      } else {
        res.status(200).json(docs)
      }
    })
  })

  app.get('/api/posts/all', function (req, res) {
    db.collection('posts').find({}).toArray(function (err, docs) {
      if (err) {
        handleError(res, err.message, 'Failed to get all posts.')
      } else {
        res.status(200).json(docs)
      }
    })
  })


}
