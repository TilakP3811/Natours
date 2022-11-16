const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app.js');

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLE REJECTION! 💥 shutting down...');
  process.exit(1);
});

dotenv.config({ path: './env/config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log('database connected'))
  .catch((err) =>
    console.log({ error: err.message, message: 'databse not connected' })
  );

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLE REJECTION! 💥 shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
