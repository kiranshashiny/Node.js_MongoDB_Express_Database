# Node.js_MongoDB_Express_Database
Code to demo the Express web server which collects data from users and can do CRUD Operations.

Prerequisites

Install mongodb  on the local laptop ( Google for Installation Instructions )

npm install mongoose
npm install express
npm install mongodb

### Initialize the NPM environment and start the code.

	npm init

	node app.js


mongodb v3.0.8 is required for running this successfully.

	$ npm install mongodb@3.0.8
	npm WARN nodetest@1.0.0 No description
	npm WARN nodetest@1.0.0 No repository field.

	+ mongodb@3.0.8
	updated 1 package in 4.143s


### Start mongodb in a terminal

	mongod --config /usr/local/etc/mongod.conf

### To create a new database the first time, run // will create a new db called "mydb"

	node createdb.js


### To create a new collection ( records in database "mydb" ) run 
	node createcollection.js


### To add names to the database. 

	Open the browser and point the URL to http://localhost:3000
	This will automatically open the page to enter the names.

### To view users entered so far

	http://localhost:3000/usersList

### To query all entries in db - command line

	mongo
	show dbs // wil show all database, check for mydb
	use mydb  // assuming that there are some entries

	// To add entries, look at createdb.js
	// to add entries in a collection, look at createcollections.js ( node createcollections.js)

	db.users.find()  // will print all entries

	db.users.find({}, {userid:1}) // list the userid, or 'firstname' as first argument in output.

	e.g:
	db.users.find({}, {firstName:1})
		{ "_id" : ObjectId("5daaf2c6020bb20347eb6c2c"), "firstName" : "sdfdsaf" }

	db.users.find({}, {firstName:1, lastName:2})
		{ "_id" : ObjectId("5daaf2c6020bb20347eb6c2c"), "firstName" : "sdfdsaf", "lastName" : "sdfdsfas" }

	db.users.find({}, {firstName:1, lastName:2, firstName:1})
		{ "_id" : ObjectId("5daaf2c6020bb20347eb6c2c"), "firstName" : "sdfdsaf", "lastName" : "sdfdsfas" }

### To delete all the users

	open a terminal and enter this command line

	$curl -X DELETE http://localhost:3000/deleteAll

### Some installation and configuration instructions

$ node -v
v9.4.0
$ npm -v
5.6.0


### Mongodb

$ mongo -version
MongoDB shell version v4.2.0
git version: a4b751dcf51dd249c5865812b390cfd1c0129c30
allocator: system
modules: none
build environment:
    distarch: x86_64
    target_arch: x86_64



#####  Insert some collections into db

If you want to insert records just name and email.

The _id is created by Mongo db itself !

{
    "_id" : 9999,
    "username" : "Shashi Kiran",
    "email" : "shkiran4@in.amazon.com"
}


Open a mongo console and enter this and some informational lines are shown followed by a command prompt


	$ mongo
	MongoDB shell version v4.2.0
	connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
	Implicit session: session { "id" : UUID("cfb64829-0f36-48df-9a29-2ea1767b0853") }
	MongoDB server version: 4.2.0
	Server has startup warnings: 
	...
	...
	>


##### To insert some records command line

	>db.usercollection.insert({ "username" : "Shashi Kiran", "email" : "shkiran4@in.amazon.com" })


##### To print the output

	>  db.usercollection.find().pretty()
	{
		"_id" : ObjectId("5da44b1320ba0c06a1a1c1bc"),
		"username" : "testuser1",
		"email" : "testuser1@testdomain.com"
	}

##### To insert single records

	db.usercollection.insert({ "username" : "testuser1", "email" : "testuser1@testdomain.com" })


#####  To insert multiple records

	multipleentries = [{ "username" : "Shashi Kiran", "email" : "shkiran4@indian.com" }, { "username" : "Ravi Prakash", "email" : "ravi@prakash.com" }]
	db.usercollection.insert(multipleentries);


##### Print stuff
	db.usercollection.insert({ "username" : "testuser1", "email" : "testuser1@testdomain.com" })
	
	db.usercollection.find().pretty()

```
{
	"_id" : ObjectId("5da5ae46297649b48fc7169d"),
	"username" : "testuser1",
	"email" : "testuser1@testdomain.com"
}
```


##### Create db
	use tutorialkart

   	db.usercollection.insert( { name: "Foo", age: 34, cars: [ "BMW 320d", "Audi R8" ] } )	

	db.usercollection.find().pretty()

```
{
	"_id" : ObjectId("5da5af23297649b48fc7169e"),
	"name" : "Foo",
	"age" : 34,
	"cars" : [
		"BMW 320d",
		"Audi R8"
	]
}
```


Another Example :


	use tutorialkart

	db.usercollection.insert({ "username" : "testuser1", "email" : "testuser1@testdomain.com" })

	db.usercollection.find().pretty()

```
{
	"_id" : ObjectId("5da5ae46297649b48fc7169d"),
	"username" : "testuser1",
	"email" : "testuser1@testdomain.com"
}
```



Insert Multiple entries into database

```
use tutorialkart
switched to db tutorialkart
newstuff = [{ "username" : "testuser2", "email" : "testuser2@testdomain.com" }, { "username" : "testuser3", "email" : "testuser3@testdomain.com" }]
[
	{
		"username" : "testuser2",
		"email" : "testuser2@testdomain.com"
	},
	{
		"username" : "testuser3",
		"email" : "testuser3@testdomain.com"
	}
]

db.usercollection.insert(newstuff);
BulkWriteResult({
	"writeErrors" : [ ],
	"writeConcernErrors" : [ ],
	"nInserted" : 2,
	"nUpserted" : 0,
	"nMatched" : 0,
	"nModified" : 0,
	"nRemoved" : 0,
	"upserted" : [ ]
})


db.usercollection.find().pretty()
{
	"_id" : ObjectId("5da5b566efe3e6e6ba465f50"),
	"username" : "testuser2",
	"email" : "testuser2@testdomain.com"
}
{
	"_id" : ObjectId("5da5b566efe3e6e6ba465f51"),
	"username" : "testuser3",
	"email" : "testuser3@testdomain.com"
}

```

##### To show all the databases

	show dbs

##### To drop a database

	> show dbs
	admin      0.000GB
	config     0.000GB
	local      0.000GB
	mydb       0.000GB
	node-demo  0.000GB
	nodetest1  0.000GB
	test       0.000GB

	> use nodetest1
	switched to db nodetest1

	> db.dropDatabase()
	{ "dropped" : "nodetest1", "ok" : 1 }


## Node.js Driver Functions

### Create and Insert one document into database "mydb" with "collections" having "name" and "address" as fields.

```
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

```

### Insert Many documents into database "mydb", this inserts 2 collections, "powers" and "heroes"

node insertmany.js

```
$ cat insertmany.js 
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
```


This finds the first entry in the database "mydb" and in collections "customers"

### Find/List first entry in the db "mydb" and "customers"
### Find is similar to 'select * from' 

node findone.js

Lists the first entry in the "mydb" database and "customers" collections.

Note: Make changes in "database", "collections" and the "column name" 

```

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}).toArray( function(err, result) {
    if (err) throw err;
    console.log ("All the entries in the db")
    console.log(result);
    db.close();
  });
});
```


### Find/List all the entries in the db "mydb" and "customers" collections.
node findall.js

https://mongodb.github.io/node-mongodb-native/markdown-docs/queries.html

```
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}).toArray( function(err, result) {
    if (err) throw err;

    console.log(result);
    db.close();
  });
});

```

Another example - query for name containing flying.

```
  // This one gets me just the records that have the word flying.
  const cursor = dbo.collection('powers').find({ name: "flying" }).toArray( function ( err, result ) {
     console.log ( result );
     db.close();
  });
```

Another example - query using regular expressions. all fields containing name that starts with a..z
```
  const cursor = dbo.collection('powers').find({ name: /^[a-z]/ }).toArray( function ( err, result ) {
     console.log ( result );
     db.close();
  });
```


### Error Handling ! throw catch 

The throw catch handling is to call the function if ( err) { throw ( err)} 
Here if the file does not exist, then an error is raised.

node readfile.js (one shot, to read line by line - scroll below) 

prints the entire contents of the file. ( https://code-maven.com/argv-raw-command-line-arguments-in-nodejs)

```
var fs = require('fs');

fs.open('GTX.csv', 'r', function (err) {
  if (err) throw err;
  console.log('Opened file succeeded');
});


fs.readFile('GTX.csv', function(err, contents) {
    console.log(contents);
});
 
console.log('after calling readFile');
```

### Read File line by line 

node readlinebyline.js

prints the line one at a time.

```
const readline = require('readline');
const fs = require('fs');

// create instance of readline
// each instance is associated with single input stream
let rl = readline.createInterface({
    input: fs.createReadStream('GTX.csv')
});

let line_no = 0;

// event is emitted after each line
rl.on('line', function(line) {
    line_no++;
    console.log(line);
});

// end
rl.on('close', function(line) {
    console.log('Total lines : ' + line_no);
});
```


