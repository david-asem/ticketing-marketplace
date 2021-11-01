const express = require('express');
const {loginRoute} = express.Router();

loginRoute.post('/api/v1/auth/login', login);

module.exports = loginRoute;