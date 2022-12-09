const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userControllers.js');
const authControllers = require('../controllers/authController.js');

router.post('/signup', authControllers.signup);
router.post('/signin', authControllers.signin);

router.get('/', userControllers.getAllUsers);
router.post('/', userControllers.createUser);
router.get('/:id', userControllers.getUser);
router.patch('/:id', userControllers.updateUser);
router.delete('/:id', userControllers.deleteUSer);

module.exports = router;
