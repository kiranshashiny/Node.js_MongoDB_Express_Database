var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
/*  dbo.collection("powers").find().toArray( function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
*/
 
  console.log ( "shashi"); 

  // This one gets me just the records that have the word flying.
  const cursor = dbo.collection('powers').find({ name: "flying" }).toArray( function ( err, result ) {
     console.log ( result );
     db.close();
  });


  /*
  console.log ("Now printing the number of elements 'stocks'")
  var query = { stock:"GTX"};
  dbo.collection("stocks").find({query}).toArray( function(err, result) {
    if (err) throw err;

    console.log(result);
    db.close();
  });
  */
/*  dbo.collection("myheroes").find({}).toArray( function(err, result) {
    if (err) throw err;

    console.log(result);
    db.close();
  });*/

});
