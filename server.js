//Dependencies - default
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

//controllers
var userInfo = require('./controllers/userInfoCtrl.js');

//Express - default
var app = express();
var port = 8080;
require('./config/passport-google.js')(passport,app);


//database
var mongoUri = 'mongodb://admin:admin@ds027145.mlab.com:27145/mymoodwall';

mongoose.connect(mongoUri);
mongoose.connection.once('open',function(){
  console.log('Connection to mongoDB in mlab is successful');
});

//dataBase rules

var User = require('./models/user.model.js');

//middleware - default

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));


  app.get('/success',function(req,res){
    res.status(200).json(req.user);
  });

  app.get('/failure',function(req,res){
    res.status(500).json('error');
  });

//endpoint
app.get('/userInfo/:id', userInfo.read);


//Connection

app.listen(port,function(){
  console.log('Node is looping on port ' + port);
});
// s%3A9r7FCEiuWc1ZANdhjtkSjV9grkG7mhx7.qq7mP16UhrV%2FeVF2zZV7DSnL1RzSAoNeM7GIP5jgq%2Bc

//s%3AE1pm_i0NTIYsuLYbinbGYUYFUK0A4Qz5.%2BONAAi2qw97rnKJB3ZYLbXovi%2Bk4MihZG73spVuvGik
