const express = require('express');
const { currentUserRouter, loginRouter, registerRouter, logoutRouter } = ('./routes/')
//const cors = require("cors");
//const path = require("path");

//JSON parsing middleware
const app = express();

app.use(express.json());

app.use('/', currentUserRouter);
app.use('/',loginRouter);
app.use('/',logoutRouter);
app.use('/',registerRouter);

module.exports = app;
