const express = require('express');

const tourRoutes = require('./routes/tourRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

const app = express();

app.use(express.json());

app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/users', userRoutes);

app.all('*', (req, res) => {
  res.status(404).json({
    status: 'failure',
    message: `Can't find url ${req.originalUrl} on the server`,
  });
});

module.exports = app;
