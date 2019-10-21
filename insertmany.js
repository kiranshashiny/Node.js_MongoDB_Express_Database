var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


function function2(){

}
var db;

MongoClient.connect(url, function(err, db) {
  var dbo = db.db("mydb");
  if (err) throw err;
  var mypowers = [
   { id: '1', name: 'flying' },
   { id: '2', name: 'teleporting' },
   { id: '3', name: 'super strengh' },
   { id: '4', name: 'clairvoyance'},
   { id: '5', name: 'mind reading' }
  ];

  var myheroes = [
     {
       id: 1,
       type: 'super-dog',
       displayName: 'The Rex',
       powers: [1, 4],
       img: 'dog.jpg',
       busy: 'false'
   }
  ];

  dbo.collection('heroes').insertMany(myheroes, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    
  }); 

  var seconds=2;
  var waitTill = new Date(new Date().getTime() + seconds * 1000);
  while(waitTill > new Date()){}

  dbo.collection('powers').insertMany(mypowers, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
  });
  var seconds=2;
  var waitTill = new Date(new Date().getTime() + seconds * 1000);
  while(waitTill > new Date()){}

  console.log ("Now printing the number of elements 'heroes'")
  dbo.collection("heroes").find({}).toArray( function(err, result) {
    if (err) throw err;

    console.log(result);
  });

  // there needs to be a small delay when printing the powers, or else it wont print !

  var seconds=2;
  var waitTill = new Date(new Date().getTime() + seconds * 1000);
  while(waitTill > new Date()){}

  console.log ("Now printing the number of elements 'powers'")
  dbo.collection("powers").find({}).toArray( function(err, result) {
    if (err) throw err;

    console.log(result);
    db.close();
  });
});

