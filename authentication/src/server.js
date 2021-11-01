const express = require('express');
require("dotenv").config({ path: "./.env" });
const http = require('http');
const app = require('./app');


app.use(express.json());


const PORT = process.env.PORT || 6000;
const server = http.createServer(app);

async function startServer() {
  //await mongoConnect();

  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
  });
}
startServer();
