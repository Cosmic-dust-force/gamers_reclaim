const { Pool, Client } = require("pg");

const DB_NAME = "gamers_reclaim";

const DB_URL =
  process.env.DATABASE_URL || `postgres://localhost:5432/${DB_NAME}`;

let client;

// github actions client config
if (process.env.CI) {
  console.log("quah");
  client = new Pool({
    DB_URL,
    ssl:
      process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : undefined,
  });
} else if (process.env.KASSI) {
  /*
    Instructions for changing your db config to use pooling.
    Copy current config object in client into Pool constructor.
    Test that your connection still works.
    Remove "Client" deconstruction from require statement on line 1.
  */
  client = new Client({
    host: "localhost",
    user: "kasboyd",
    port: 5432,
    password: process.env.DB_PASSWORD,
    database: "gamers_reclaim",
  });
} else {
  console.log("no me");
  client = new Pool({ DB_URL });
}

module.exports = client;
