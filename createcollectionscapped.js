const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(dbName);

  createCapped(db, function() {
    client.close();
  });
});

function createCapped(db, callback) {
  db.createCollection("myCollection", { "capped": true, "size": 100000, "max": 5000},
    function(err, results) {
      console.log("Collection created.");
      callback();
    }
  );
};
