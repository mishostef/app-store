var mongodb = require("mongodb");
var CONTACTS_COLLECTION = "contacts";
var USERS_COLLECTION = "users";
var POSTS_COLLECTION = 'posts';
var PRODUCTS_COLLECTION = 'products';
var db
var collections={};
   mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", function (err, client) {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    // Save database object from the callback for reuse.
     db = client.db();
    console.log("Database connection ready ...contacts");
    collections.contacts = db.collection(CONTACTS_COLLECTION)
    collections.users = db.collection(USERS_COLLECTION)
    collections.posts = db.collection(POSTS_COLLECTION)
    collections.products = db.collection(PRODUCTS_COLLECTION)
  });
module.exports = collections;

