// This is the Web Server
const http = require("http");
require('dotenv').config();
const { client } = require('./db')
const app = require('./app')


// bring in the DB connection
//const { client } = require("./db");

// connect to the server
const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

// define a server handle to close open tcp connection after unit tests have run
const handle = server.listen(PORT, async () => {
  console.log(`Server is running on ${PORT}!`);

  try {
    await client.connect();
    console.log("Database is open for business!");
  } catch (error) {
    console.error("Database is closed for repairs!\n", error);
  }
});

// export server and handle for routes/*.test.js
module.exports = { server, handle };
