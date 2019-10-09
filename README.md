# Node.js_MongoDB_Express_Database
Code to demo the Express web server which collects data from users and can do CRUD Operations.

Prerequisites

Install mongodb  on the local laptop ( Google for specific directions )

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
