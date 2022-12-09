const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please provide us your name'],
  },
  email: {
    type: String,
    required: [true, 'please provide us your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'please provide us the valid email '],
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'please provide us the passwords'],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'please confirm the password'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
