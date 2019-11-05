var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/mydb");

var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    email : String
});

var User = mongoose.model("User", nameSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    console.log ( req.body);
    console.log ( "First name is ", req.body.firstName );
    console.log ( "Last name  is ", req.body.lastName);
    console.log ( "email name is ", req.body.email);
    console.log ( "password is   ",req.body.password);

    myData.save()
        .then(item => {
            res.send("Name saved to database, now try /usersList, /deleteAll");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.get('/usersList', function(req, res) {
  User.find({}, function(err, users) {
    var userMap = {};

    users.forEach(function(user) {
      userMap[user._id] = user;
    });

    console.log ( "Users are ");
    users.forEach(function(user) {
    console.log ( user );
    
      userMap[user._id] = user;
      if ( user.firstName == "ravi" ) {
	console.log ("User ravi found ");
      }
    });
    res.send(userMap);  
  });
});

app.post('/sessions', function (req, res) {
    console.log(req.body.email);
    console.log(req.body.password);
    User.find({
        email: req.body.email,
        password: req.body.password
    }, function (err, users) {
        if (err) {
            console.log('User Not Found');
            res.status(400);
        }
    	var userMap = {};

    	users.forEach(function(user) {
      		userMap[user._id] = user;
		console.log ( user );
    	});
	
        //console.log(req.session.firstName);
    });

    return res.redirect('/Management/Index');
});

app.get('/deleteAll', function(req, res) {
    console.log ( "In the delete All function ")
    User.remove({}, function(err) {
            if (err) {
                console.log(err)
            } else {
                res.end('success, was able to delete all records. !');
            }
        }
    );
});



app.listen(port, () => {
    console.log("Server listening on port " + port);
});
