const express = require('express');
const {currentUserRouter} = express.Router();

currentUserRouter.get('/api/v1/auth/currentuser', currentUser);

module.exports = currentUserRouter;