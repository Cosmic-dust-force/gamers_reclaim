const { client } = require(".");

async function createTables() {
    client.query(`
        CREATE TABLE contacts (
            id SERIAL PRIMARY KEY,
            address VARCHAR(255) NOT NULL,
            phone_number TEXT NOT NULL
        );

        CREATE TYPE role AS ENUM ('customer', 'admin', 'guest');

        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password VARCHAR(255),
            user_role role,
            contact_id INTEGER REFERENCES contacts(id)
        );
    `)
}