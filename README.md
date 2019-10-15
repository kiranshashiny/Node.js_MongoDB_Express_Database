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

### To add names to the database. 

	Open the browser and point the URL to http://localhost:3000
	This will automatically open the page to enter the names.

### To view users entered so far

	http://localhost:3000/usersList

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


##### Create db
	use tutorialkart

   	db.usercollection.insert( { name: "Foo", age: 34, cars: [ "BMW 320d", "Audi R8" ] } )	

	db.usercollection.find().pretty()


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
