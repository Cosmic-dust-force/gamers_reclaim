const { client } = require("../");

async function createContacts() {
  await client.query(`
        CREATE TABLE contacts (
            id SERIAL PRIMARY KEY,
            address VARCHAR(255) NOT NULL,
            phone_number TEXT NOT NULL
        );
        `);
}

async function createUsers() {
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
}

async function createCategories() {
  await client.query(`
    CREATE TABLE categories(
        id SERIAL PRIMARY KEY,
        category_name VARCHAR(255) UNIQUE NOT NULL
    );
`);
}

async function createProducts() {
  await client.query(`
    CREATE TABLE products(
      id SERIAL PRIMARY KEY,
      product_name VARCHAR(255) UNIQUE NOT NULL,
      price_usd MONEY NOT NULL,
      inventory_quantity INTEGER NOT NULL,
      description VARCHAR(255) NOT NULL,
      category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
      brand VARCHAR(255) NOT NULL,
      image_url VARCHAR(255)
    );
    `);
}

async function createOrders() {
  await client.query(`
    CREATE TABLE orders(
      id SERIAL PRIMARY KEY,
      order_date DATE,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
    );
  `);
}

async function createCartItems() {
  await client.query(`
    CREATE TABLE cart_items(
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
      order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
      quantity INTEGER NOT NULL,
      price_usd MONEY NOT NULL,
      UNIQUE (user_id, order_id, product_id)
    );
  `);
}

module.exports = {
  createContacts,
  createUsers,
  createCategories,
  createProducts,
  createOrders,
  createCartItems,
};
