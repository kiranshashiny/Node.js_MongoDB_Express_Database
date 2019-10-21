var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var mypowers = [
   { id: 1, name: 'flying' },
   { id: 2, name: 'teleporting' },
   { id: 3, name: 'super strengh' },
   { id: 4, name: 'clairvoyance'},
   { id: 5, name: 'mind reading' }

  ];

  var myheroes = [
     {
       id: 1,
       type: 'super-dog',
       displayName: 'The Rex',
       powers: [1, 4],
       img: 'dog.jpg',
       busy: false
    },
    {
       id: 2,
       type: 'super-horse',
       displayName: 'Peter Pan',
       powers: [2, 5],
       img: 'horse.jpg',
       busy: false
   },
   {
       id: 3,
       type: 'super-cat',
       displayName: 'Tom',
       powers: [3, 2],
       img: 'cat.jpg',
       busy: false
   },
   {
       id: 4,
       type: 'super-hamster',
       displayName: 'Jerry',
       powers: [1, 5],
       img: 'hamster.jpg',
       busy: false
   }
  ];
  dbo.collection("heroes").insertMany(myheroes, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });

  dbo.collection("powers").insertMany(mypowers, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});

