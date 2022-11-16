const express = require('express');
const AppError = require('./utils/appError.js');

const tourRoutes = require('./routes/tourRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const globalErrorHandler = require('./controllers/errorControllers.js');

const app = express();

app.use(express.json());

app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/users', userRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find url ${req.originalUrl} on the server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
