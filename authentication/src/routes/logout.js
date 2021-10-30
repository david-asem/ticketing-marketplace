const express = require('express');
const {logoutRouter} = express.Router();

logoutRouter.get('/api/v1/auth/logout', logout);

module.exports = logoutRouter;