require('dotenv').config();
const { client } = require(".");
const { admins, users } = require("../data/userData");
const { contacts } = require("../data/contactData");
const { createUser, getAllUsers, getUserByEmailDb, getUserById } = require("./adapters/usersAdapter");
const { createContact, getAllContacts } = require("./adapters/contactsAdapter");
const { hashPassword } = require('../../security');



async function deleteTables() {
    await client.query(`
        DROP TABLE IF EXISTS users;
        DROP TYPE IF EXISTS role;
        DROP TABLE IF EXISTS contacts;
    `);
}

async function createTables() {
    await client.query(`
        CREATE TABLE contacts (
            id SERIAL PRIMARY KEY,
            address VARCHAR(255) NOT NULL,
            phone_number TEXT NOT NULL
        );
        `);

        await client.query(`
        CREATE TYPE role AS ENUM ('customer', 'admin', 'guest');
        `);

        await client.query(`
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
    contacts.map(async (contact, idx) => {
        console.log("Inserting contacts");
        const newContact = await createContact(contact);
        const userWithContact = users[idx];
        userWithContact.contact_id = newContact.id;
        if (userWithContact.password) {
            userWithContact.password = await hashPassword(userWithContact.password);
        }
        console.log("Inserting test users");
        return await createUser(userWithContact);
    })
    admins[0].password = await hashPassword(admins[0].password);
    await createUser(admins[0]);
}

async function testGetAllUsers() {
    console.log("Getting all users.");
    const users = await getAllUsers();
    console.log(users);
}

async function testGetAllContacts(){
    console.log("Getting all contacts.");
    const contacts = await getAllContacts();
    console.log(contacts);
}

async function testGetUserByEmail() {
    console.log("Getting user by email: misty@gmail.com");
    const misty = await getUserByEmailDb("misty@gmail.com");
    console.log(misty);
}

async function testGetUserById() {
    console.log("Getting user by id: 2");
    const user = await getUserById(2);
    console.log(user);
}

async function seed() {
    try {
        client.connect();
        console.log("Deleting tables...");
        await deleteTables();
        console.log("Creating tables...");
        await createTables();
        await insertTestData();
        await testGetAllUsers();
        await testGetAllContacts();
        await testGetUserByEmail();
        await testGetUserById();
        console.log("Success!");
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        client.end();
    }
}

seed();