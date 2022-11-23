require("dotenv").config();
const { client } = require("..");

const {
  createContacts,
  createUsers,
  createCategories,
  createProducts,
  createOrders,
  createCartItems,
} = require("./tableCreation");
const {
  populateCustomers,
  populateAdmins,
  populateProducts,
  populateCategories,
  populateFirstCustomerCart,
} = require("./tablePopulation");

const {
  testGetAllCategories,
  testGetAllProducts,
  testGetAllUsers,
  testGetUserByEmail,
  testGetUserById,
  testGetAllContacts,
  testGetAllCartItems,
} = require("./tests");

async function deleteTables() {
  await client.query(`
    DROP TABLE IF EXISTS cart_items;
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS categories;
    DROP TABLE IF EXISTS orders;
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
  await createOrders();
  await createCartItems();

  console.log("Tables created");
}

async function insertTestData() {
  console.log("Inserting customers");
  await populateCustomers();
  console.log("Inserting admins");
  await populateAdmins();
  console.log("Inserting test categories");
  await populateCategories();
  console.log("Inserting test products");
  await populateProducts();
  console.log("Inserting test cart items");
  await populateFirstCustomerCart();
}

async function runTests() {
  await testGetAllUsers();
  await testGetAllContacts();
  await testGetUserByEmail();
  await testGetUserById();
  await testGetAllCategories();
  await testGetAllProducts();
  await testGetAllCartItems();
}

async function seed() {
  try {
    client.connect();
    console.log("Deleting tables...");
    await deleteTables();
    console.log("Creating tables...");
    await createTables();
    await insertTestData();
    await runTests();
    console.log("Success!");
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    client.end();
  }
}

seed();
