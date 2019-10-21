var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Shashi Kiran SK Consultants", address: "Super House" };

  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");


  // This prints just the first one.
  console.log ( "Printing the entries one ");
  dbo.collection("customers").findOne({} , function ( err, result ){
 	if ( err) {
		throw err;
	}
	console.log ( result.name );
  });

  
  db.close();
  });
});
