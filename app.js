var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});
var User = mongoose.model("User", nameSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    console.log ( "hello ");
    console.log ( req.body);
    console.log ( "First name is ");
    console.log ( req.body.firstName );
    console.log ( "last name is ");
    console.log ( req.body.lastName );
    myData.save()
        .then(item => {
            res.send("Name saved to database");
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
      userMap[user._id] = user;
      if ( user.firstName == "ravi" ) {
	console.log ("User ravi found ");
      }
    });
    res.send(userMap);  
  });
});

app.delete('/deleteAll', function(req, res) {
    console.log ( "In the delete All function ")
    User.remove({}, function(err) {
            if (err) {
                console.log(err)
            } else {
                res.end('success');
            }
        }
    );
});



app.listen(port, () => {
    console.log("Server listening on port " + port);
});
