const mongoose = require('mongoose');
const { MongoURI } = require('../client/env/config.js')
mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', () => {
  console.log('Connected to MongoDB')
})

const { Schema } = mongoose;