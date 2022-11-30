const { client } = require("../");
const { hashPassword } = require("../../../security");
const { contacts } = require("../../data/contactData");
const { categories } = require("../../data/categoryData");
const { products } = require("../../data/productData");
const { productReviews } = require("../../data/productReviewData");
const { admins, users } = require("../../data/userData");
const { createContact } = require("../adapters/contactsAdapter");
const {
  createProduct,
  getAllProducts,
} = require("../adapters/productsAdapter");
const { createUser, getAllCustomers } = require("../adapters/usersAdapter");
const { createCategory } = require("../adapters/categoriesAdapter");
const { createCartItem } = require("../adapters/cartItemsAdapter");
const { createProductReview } = require("../adapters/productReviewsAdapter");

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

async function populateCategories() {
  const insertCategories = categories.map((category) => {
    const modelCategory = {
      id: category.id,
      categoryName: category.category_name,
    };

    return createCategory(modelCategory);
  });

  await Promise.all(insertCategories);
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

    return createProduct({
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

async function populateProductReviews(){
  const insertProductReviews = productReviews.map((productReview) => {
    return createProductReview(productReview);
  })

  await Promise.all(insertProductReviews); 
}

async function populateFirstCustomerCart() {
  const customers = await getAllCustomers();
  const firstCustomerId = customers[0].id;

  const products = await getAllProducts();

  await createCartItem({
    user_id: firstCustomerId,
    product_id: products[0].id,
    quantity: 1,
    price_usd: products[0].price_usd,
  });

  await createCartItem({
    user_id: firstCustomerId,
    product_id: products[1].id,
    quantity: 3,
    price_usd: products[1].price_usd,
  });
}

module.exports = {
  populateCustomers,
  populateAdmins,
  populateCategories,
  populateProducts,
  populateProductReviews,
  populateFirstCustomerCart,
};
