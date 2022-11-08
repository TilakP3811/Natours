const express = require('express');

const tourRoutes = require('./routes/tourRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

const app = express();
console.log(app.get('env'));

app.use(express.json());

app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/users', userRoutes);

module.exports = app;
