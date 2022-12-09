const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'succcess',
    length: users.length,
    data: {
      users,
    },
  });
});

exports.createUser = (req, res) => {
  res.status(200).json({
    status: 'succcess',
    data: {
      users: 'this rout is not decleares yet!',
    },
  });
};

exports.getUser = (req, res) => {
  res.status(200).json({
    status: 'succcess',
    data: {
      users: 'this rout is not decleares yet!',
    },
  });
};

exports.updateUser = (req, res) => {
  res.status(200).json({
    status: 'succcess',
    data: {
      users: 'this rout is not decleares yet!',
    },
  });
};

exports.deleteUSer = (req, res) => {
  res.status(200).json({
    status: 'succcess',
    data: {
      users: 'this rout is not decleares yet!',
    },
  });
};
