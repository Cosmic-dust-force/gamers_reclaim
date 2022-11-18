const { client } = require("../");
const { hashPassword } = require("../../../security");
const { contacts } = require("../../data/contactData");
const { products } = require("../../data/productData");
const { admins, users } = require("../../data/userData");
const { createContact } = require("../adapters/contactsAdapter");
const { createProduct } = require("../adapters/productsAdapter");
const { createUser } = require("../adapters/usersAdapter");

async function populateCustomers() {
  contacts.map(async (contact, idx) => {
    const newContact = await createContact(contact);
    const userWithContact = users[idx];
    userWithContact.contact_id = newContact.id;
    if (userWithContact.password) {
      userWithContact.password = await hashPassword(userWithContact.password);
    }
    return await createUser(userWithContact);
  });
}

async function populateAdmins() {
  admins[0].password = await hashPassword(admins[0].password);
  await createUser(admins[0]);
}

async function populateProducts() {
  const insertProducts = products.map((product) => {
    const {
      product_name: productName,
      price_usd: priceUsd,
      inventory_quantity: inventoryQuantity,
      category_id: categoryId,
      image_url: imageUrl,
      description,
      brand,
    } = product;
    createProduct({
      productName,
      priceUsd,
      inventoryQuantity,
      description,
      brand,
      categoryId,
      imageUrl,
    });
  });
  await Promise.all(insertProducts);
}

module.exports = { populateCustomers, populateAdmins, populateProducts };
