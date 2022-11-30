const { getAllCategories } = require("../adapters/categoriesAdapter");
const { getAllProducts } = require("../adapters/productsAdapter");
const {
  getAllUsers,
  getUserByEmail,
  getUserById,
} = require("../adapters/usersAdapter");
const { getAllProductReviews } = require("../adapters/productReviewsAdapter")
const { getAllContacts } = require("../adapters/contactsAdapter");
const { getAllCartItems } = require("../adapters/cartItemsAdapter");

async function testGetAllCategories() {
  console.log("Getting all categories.");
  const categories = await getAllCategories();
  console.log(categories);
}

async function testGetAllProducts() {
  console.log("Getting all products!");
  const products = await getAllProducts();
  console.log(products);
}

async function testGetAllProductReviews(){
  console.log("Getting all reviews.");
  const productReviews = await getAllProductReviews();
  console.log(productReviews);
}

async function testGetAllUsers() {
  console.log("Getting all users.");
  const users = await getAllUsers();
  console.log(users);
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

async function testGetAllContacts() {
  console.log("Getting all contacts.");
  const contacts = await getAllContacts();
  console.log(contacts);
}

async function testGetAllCartItems() {
  console.log("Getting all cartItems.");
  const cartItems = await getAllCartItems();
  console.log(cartItems);
}

module.exports = {
  testGetAllCategories,
  testGetAllProducts,
  testGetAllProductReviews,
  testGetAllUsers,
  testGetUserByEmail,
  testGetUserById,
  testGetAllContacts,
  testGetAllCartItems,
};
