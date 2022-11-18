require("dotenv").config();
const { client } = require("..");
const {
  getAllUsers,
  getUserByEmail,
  getUserById,
} = require("../adapters/usersAdapter");
const { getAllContacts } = require("../adapters/contactsAdapter");
const { getAllProducts } = require("../adapters/productsAdapter");
const {
  createContacts,
  createUsers,
  createCategories,
  createProducts,
} = require("./tableCreation");
const {
  populateCustomers,
  populateAdmins,
  populateProducts,
} = require("./tablePopulation");

async function deleteTables() {
  await client.query(`
        DROP TABLE IF EXISTS products;
        DROP TABLE IF EXISTS categories;
        DROP TABLE IF EXISTS users;
        DROP TYPE IF EXISTS role;
        DROP TABLE IF EXISTS contacts;
    `);
}

async function createTables() {
  await createContacts();
  await createUsers();
  await createCategories();
  await createProducts();

  console.log("Tables created");
}

async function insertTestData() {
  console.log("Inserting customers");
  await populateCustomers();
  console.log("Inserting admins");
  await populateAdmins();
  console.log("Inserting test products");
  await populateProducts();
}

async function testGetAllProducts() {
  console.log("Getting all products!");
  const products = await getAllProducts();
  console.log(products);
}

async function testGetAllUsers() {
  console.log("Getting all users.");
  const users = await getAllUsers();
  console.log(users);
}

async function testGetAllContacts() {
  console.log("Getting all contacts.");
  const contacts = await getAllContacts();
  console.log(contacts);
}

async function testGetUserByEmail() {
  console.log("Getting user by email: misty@gmail.com");
  const misty = await getUserByEmail("misty@gmail.com");
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
    await testGetAllProducts();
    console.log("Success!");
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    client.end();
  }
}

seed();
