const express = require('express');
const currentUserRoute = express.Router();

currentUserRoute.get('/api/v1/auth/currentuser', ()=>{});

module.exports = currentUserRoute;