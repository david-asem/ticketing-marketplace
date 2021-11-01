const express = require('express');
const {logoutRoute} = express.Router();

logoutRoute.get('/api/v1/auth/logout', logout);

module.exports = logoutRoute;