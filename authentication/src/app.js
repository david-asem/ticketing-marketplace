const express = require('express');
require("dotenv").config({ path: "./.env" });
const  currentUserRoute  = ('./routes/current-userRoute.js');
const loginRoute = ('./routes/loginRoute');
const logoutRoute  = ('./routes/logoutRoute');
const {registerRoute}  = require('./routes/registerRoute');
const app = express();



app.use('/api/v1/auth', registerRoute);
//app.use(currentUserRoute);
//app.use(loginRoute);
//app.use(logoutRoute);


module.exports = app;