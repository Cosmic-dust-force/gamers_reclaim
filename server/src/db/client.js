const { Client } = require("pg");

const DB_NAME = "gamers_reclaim";

const DB_URL =
  process.env.DATABASE_URL || `postgres://localhost:5432/${DB_NAME}`;

let client;

if (process.env.CI) {
  client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "postgres",
  });
} else if (process.env.KASSI) {
  client = new Client({
    host: "localhost",
    user: "kasboyd",
    port: 5432,
    password: process.env.DB_PASSWORD,
    database: "gamers_reclaim",
  });
} else {
  client = new Client(DB_URL);
}

module.exports = client;
