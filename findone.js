var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("heroes").findOne({}, function(err, result) {
    if (err) throw err;

    for ( i=0; i< 10; i ++ ){
        console.log ("");
       
    }
    console.log(result.name);
    db.close();
  });
});
