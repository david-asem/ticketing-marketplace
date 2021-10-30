const express = require('express');
const {loginRouter} = express.Router();

loginRouter.post('/api/v1/auth/login', login);

module.exports = loginRouter;