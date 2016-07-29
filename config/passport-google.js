var session = require('express-session');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var keys = require('./passport-keys.js');
var User = require('../models/user.model.js')

module.exports = function(passport,app) {
//Google Strategy
app.use(session({secret: "I am a nerd"}));
app.use(passport.initialize());
app.use(passport.session());


passport.use(new GoogleStrategy({
    clientID: keys.clientID,
    clientSecret: keys.clientSecret,
    callbackURL: keys.callbackURL
  },
  function(token, refreshToken, profile, done){
    console.log(profile);
    User.findOne({googleId:profile.id},function(err,user){
      if(err){
        console.log(err);
        return
        res.status(500).send(err);
      }
      if(!user){
        User.create({name:profile.displayName,googleId:profile.id},function(err,user){
          console.log("USERDETAILS FROM User.create",user);
          return done(null,user);
        })
      } else {
        console.log("USERDETAILS22 FROM User.create",user);
        return done(null,user);
      }
    })
  }));
  app.get('/auth/google', passport.authenticate('google', {scope:['profile']}));

  app.get('/auth/google/callback', passport.authenticate('google'), function(req,res){
    if(req.user){
      res.redirect('/#/moodwall/' + req.user._id)
    } else res.redirect('/')
  });

  //serializeUser (turns into string to put on session)
  //deserialize - changes the string to object

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

}
