require("dotenv").config();
const { client } = require("..");

const {
  createContacts,
  createUsers,
  createCategories,
  createProducts,
  createOrders,
  createCartItems,
  createProductReviews,
} = require("./tableCreation");
const {
  populateCustomers,
  populateAdmins,
  populateProducts,
  populateCategories,
  populateFirstCustomerCart,
  populateProductReviews,
} = require("./tablePopulation");

const {
  testGetAllCategories,
  testGetAllProducts,
  testGetAllUsers,
  testGetUserByEmail,
  testGetUserById,
  testGetAllContacts,
  testGetAllCartItems,
  testGetAllProductReviews,
} = require("./tests");

async function deleteTables() {
  await client.query(`
    DROP TABLE IF EXISTS cart_items;
    DROP TABLE IF EXISTS product_reviews;
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
  await createProductReviews();
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
  console.log("Inserting test product reviews");
  await populateProductReviews();
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
  await testGetAllProductReviews();
  await testGetAllCartItems();
}

async function seed() {
  try {
    await client.connect();
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
