const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};

const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(200).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

const getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((ele) => ele.id === id);
  if (!tour) {
    return res
      .status(404)
      .json({ status: 'failure', message: 'record not found' });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

const updateTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((ele) => ele.id === id);
  if (!tour) {
    return res
      .status(404)
      .json({ status: 'failure', message: 'record not found' });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

const deleteTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((ele) => ele.id === id);
  if (!tour) {
    res.status(404).json({ status: 'failure', message: 'record not found' });
  }
  res.status(204).json({ status: 'success', data: null });
};

app.get('/api/v1/tours', getAllTours);
app.post('/api/v1/tours', createTour);
app.get('/api/v1/tours/:id', getTour);
app.patch('/api/v1/tours/:id', updateTour);
app.delete('/api/v1/tours/:id', deleteTour);

const getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'succcess',
    data: {
      users: 'this rout is not decleares yet!',
    },
  });
};

const createUser = (req, res) => {
  res.status(200).json({
    status: 'succcess',
    data: {
      users: 'this rout is not decleares yet!',
    },
  });
};

const getUser = (req, res) => {
  res.status(200).json({
    status: 'succcess',
    data: {
      users: 'this rout is not decleares yet!',
    },
  });
};

const updateUser = (req, res) => {
  res.status(200).json({
    status: 'succcess',
    data: {
      users: 'this rout is not decleares yet!',
    },
  });
};

const deleteUSer = (req, res) => {
  res.status(200).json({
    status: 'succcess',
    data: {
      users: 'this rout is not decleares yet!',
    },
  });
};

app.get('/api/v1/users', getAllUsers);
app.post('/api/v1/users', createUser);
app.get('/api/v1/users/:id', getUser);
app.patch('/api/v1/users/:id', updateUser);
app.delete('/api/v1/users/:id', deleteUSer);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
