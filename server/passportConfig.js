const database = require('../database/index.js');
const { User } = database.models
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      console.log('Username: ', username)
      console.log('PASSWORD: ', password)
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        console.log('USER: ', user)
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, results) => {
          if (err) throw err;
          console.log(results)
          if (results === true) {
            return done(null, user)
          } else {
            return done(null, false)
          }
        })
      })
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id)
  })
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      cb(err, user)
    })
  })
}