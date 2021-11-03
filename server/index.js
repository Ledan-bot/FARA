const express = require('express');
const path = require('path');
const redis = require('redis');
const axios = require('axios').default;
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const session = require('express-session');
const database = require('../database/index.js');
const { User } = database.models
const { apiKey } = require('../env/config.js')
const {redisCache, redisBalanceSheet, redisGeneralInfo, redisKeyMetrics} = require('./caches.js')
// --------------------END OF IMPORTS ---------------------------------

const PORT = process.env.PORT || 8666;
const REDISPORT = process.env.PORT || 6379
const client = redis.createClient(REDISPORT);
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

// --------------------HELPER FUNCTIONS ----------------------------------


async function getYahooNews(req, res, next) {
  try {
    var options = {
      method: 'GET',
      url: 'https://mboum-finance.p.rapidapi.com/ne/news',
      headers: {
        'x-rapidapi-host': 'mboum-finance.p.rapidapi.com',
        'x-rapidapi-key': apiKey
      }
    };
    const response = await axios.request(options)
    const { data } = response
    let dataString = JSON.stringify(data);

    client.setex(options.url, 86400, dataString)
    res.send(data)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

async function getKeyMetrics({query}, res, next) {
  const {ticker} = query
  console.log('TICKER: ', ticker)
  try {
    let options = {
      method: 'GET',
      url: `https://quantel-io.p.rapidapi.com/key-metrics/${ticker}`,
      params: {period: 'quarter'},
      headers: {
        'x-rapidapi-host': 'quantel-io.p.rapidapi.com',
        'x-rapidapi-key': apiKey
      }
    };
    const response = await axios.request(options)
    const { data } = response
    let dataString = JSON.stringify(data)

    client.setex(ticker, 86400, dataString)
    res.send(data)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}

async function getBlanceSheet({query}, res, next) {
  const { ticker } = query;
  try {
    let options = {
      method: 'GET',
      url: `https://quantel-io.p.rapidapi.com/balance-sheet-statement/${ticker}`,
      params: { period: 'quarter' },
      headers: {
        'x-rapidapi-host': 'quantel-io.p.rapidapi.com',
        'x-rapidapi-key': apiKey
      }
    };

    const response = await axios.request(options)
    const { data } = response
    let dataString = JSON.stringify(data)

    const str = ticker + 'BS'
    client.setex(str, 86400, dataString)
    res.send(data)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}

async function getGeneralInfo({query}, res, next) {
  const { ticker } = query;
  try {
    let options = {
      method: 'GET',
      url: `https://quantel-io.p.rapidapi.com/profile/${ticker}`,
      headers: {
        'x-rapidapi-host': 'quantel-io.p.rapidapi.com',
        'x-rapidapi-key': apiKey
      }
    };
    const response = await axios.request(options)
    const { data } = response
    let dataString = JSON.stringify(data)

    const str = ticker + 'GI'
    client.setex(str, 86400, dataString)
    res.send(data)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}
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
  const { username, password, firstName, lastName, email } = body
  User.findOne({username: username}, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send('User Already Exists');
    if (!doc) {
      const hashedPassword = await bcrypt.hash(password, 10)
      const newUser = new User({
        username: username,
        password: hashedPassword,
        Information: {
          firstName: firstName,
          lastName: lastName,
          email: email
        }
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

app.get('/yahoo/news', redisCache, getYahooNews);

app.get('/api/search/:ticker/key-metrics', redisKeyMetrics, getKeyMetrics)

app.get('/api/search/:ticker/balance-sheet', redisBalanceSheet, getBlanceSheet)

app.get('/api/search/:ticker/general-info', redisGeneralInfo, getGeneralInfo)

app.get('*', (req, res) => {
  res.sendStatus(500)
})

// --------------------END OF ROUTES ---------------------------------

// --------------------Start OF Configuration ------------------------


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})