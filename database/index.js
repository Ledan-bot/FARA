const mongoose = require('mongoose');
const { MongoURI } = require('../env/config.js')
mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', () => {
  console.log('Connected to MongoDB')
})

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  Information: {
    firstName: String,
    lastName: String,
    email: String,
    birthDate: Date
  }
})

const User = mongoose.model('users', userSchema)

const findUser = async (user) => {
  let userQuery = await User.findOne({ username: user.username }, async (err, doc) => {
    if (err) return err;
    if (doc) return 'User already exists';
    if (!doc) {
      const newUser = new User({
        username: user.username,
        password: user.password
      });
      await newUser.save();
      return 'User Created'
    }
  })
  return userQuery
}



let emailSchema = new Schema({
  email: String
})

let Email = mongoose.model('Email', emailSchema, 'emails')

const addNewEmail = (email) => {
  let newEmail = new Email({
    email: email
  })

  newEmail.save((err, saved) => {
    if (err => {
      console.log(err)
    })
      return saved
  })
}


module.exports = {
  models: {
    User: User
  },
  addNewEmail: addNewEmail,
  findUser: findUser
}