const express = require('express');
const { body} = require('express-validator');
const registerRoute = express.Router();
const {register}  = require('../controllers/authController');

// const app = express();
// app.use(express.json());

//register route
registerRoute.post('/register', [
  body('email').isEmail().withMessage('Email must be valid').normalizeEmail().toLowerCase(),
  body('password')
    .trim()
    .isLength({ min: 4 })
    .withMessage('Password must be more than 4 characters')], register);

module.exports = {
  registerRoute,
};