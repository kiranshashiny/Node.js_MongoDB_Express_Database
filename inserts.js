const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
///////// const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db('mydb');

  // Insert a single document
  db.collection('customers').insertOne({a:1}, function(err, r) {
    assert.equal(null, err);
    assert.equal(1, r.insertedCount);
    console.log ( "Inserted a single record ")

    // Insert multiple documents
    db.collection('customers').insertMany([{a:2}, {a:3}], function(err, r) {
      assert.equal(null, err);
      assert.equal(2, r.insertedCount);
      console.log ( "Inserted multiple records ")

      client.close();
    });

  });
});
