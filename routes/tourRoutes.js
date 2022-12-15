const express = require('express');
const router = express.Router();

const tourControllers = require('../controllers/tourControllers.js');
const authController = require('../controllers/authController.js');

router.get('/', authController.protect, tourControllers.getAllTours);
router.get('/tour-stats', tourControllers.getTourStats);
router.get('/monthly-plan/:year', tourControllers.getMonthlyPlan);
router.post('/', tourControllers.createTour);
router.get('/:id', tourControllers.getTour);
router.patch('/:id', tourControllers.updateTour);
router.delete('/:id', tourControllers.deleteTour);

module.exports = router;
