const express = require('express');
const {registerRouter} = express.Router();
const { register } = require('../controllers/authController');

//register route
registerRouter.post('/api/v1/auth/register', register);

module.exports = registerRouter;