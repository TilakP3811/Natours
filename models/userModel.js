const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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
    validate: {
      validator: function (ele) {
        return ele === this.password;
      },
      message: "Password didn't matched",
    },
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
