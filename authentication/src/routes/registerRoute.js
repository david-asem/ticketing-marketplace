const express = require('express');
const {validateUser} = require('../services/validate');
const registerRoute = express.Router();
const {register}  = require('../controllers/authController');

//register route
registerRoute.post('/register', validateUser, register);

module.exports = {
  registerRoute,
};