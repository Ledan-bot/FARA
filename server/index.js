const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const session = require('express-session');
const database = require('../database/index.js');
// const { User } = database.models
// --------------------END OF IMPORTS ---------------------------------

const app = express();

//Midlleware
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
  origin: 'https://localhost:8666', // <--- location of the react app we are connecting to
  credentials: true
}));
app.use(session({
  secret: 'secretCode',
  resave: true,
  saveUninitialized: true
}))
app.use(cookieParser('secretCode'));
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport)
// --------------------END OF MIDDLEWARE ---------------------------------

// --------------------START OF ROUTES -----------------------------------
app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) res.send('No User Exists');
    else {
      req.logIn(user, err => {
        if (err) throw err;
        res.send('Successfully Authenticated');
        console.log(req.user)
      })
    }
  })(req, res, next);
})

app.post('/register', ({ body }, res) => {
  const { username, password } = body
  User.findOne({username: username}, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send('User Already Exists');
    if (!doc) {
      const hashedPassword = await bcrypt.hash(password, 10)
      const newUser = new User({
        username: username,
        password: hashedPassword
      });
      await newUser.save();
      res.send('User Created')
    }
  })
})

app.get('/user', (req, res) => {
  console.log(req)
  res.send(req.user);
})
app.post('/email', (req, res) => {
  database.addNewEmail(req.body.email)
  res.status(201).send('Created')
})

// --------------------END OF ROUTES ---------------------------------

// --------------------Start OF Configuration ------------------------

const port = 8666;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})