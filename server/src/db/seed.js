const { client } = require(".");
const { users } = require("../data/userData");
const { createUser } = require("./adapters/usersAdapter");

async function deleteTables() {
    client.query(`
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS contacts;
    `);
}

async function createTables() {
    client.query(`
        CREATE TABLE contacts (
            id SERIAL PRIMARY KEY,
            address VARCHAR(255) NOT NULL,
            phone_number TEXT NOT NULL
        );
        `);

        client.query(`
        CREATE TYPE role AS ENUM ('customer', 'admin', 'guest');
        `);

        client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password VARCHAR(255),
            user_role role,
            contact_id INTEGER REFERENCES contacts(id) ON DELETE CASCADE
        );
    `);

    console.log("Tables created");
}

async function insertTestData() {
    console.log("Inserting test users");
    const newUser = await createUser(users[0]);
    console.log(newUser);
}

async function seed() {
    console.log("Deleting tables...");
    await deleteTables();
    console.log("Creating tables...");
    await createTables();
    await insertTestData();
    console.log("Success!");
}

seed();