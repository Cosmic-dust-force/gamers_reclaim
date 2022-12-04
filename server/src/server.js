const http = require("http");
require("dotenv").config();
const { client } = require("./db");
const app = require("./app");

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

const handle = server.listen(PORT, async () => {
  console.log(`Server is running on ${PORT}!`);

  try {
    await client.connect();
    console.log("Database is open for business!");
  } catch (error) {
    console.error("Database is closed for repairs!\n", error);
  }
});

module.exports = { server, handle };
