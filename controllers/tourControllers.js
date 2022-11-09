const Tour = require('../models/tourModels.js');

exports.checkBody = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res
      .status(400)
      .json({ status: 'failure', message: 'missing name and price' });
  }
  next();
};

exports.getAllTours = (req, res) => {};

exports.createTour = (req, res) => {};

exports.getTour = (req, res) => {};

exports.updateTour = (req, res) => {};

exports.deleteTour = (req, res) => {};
