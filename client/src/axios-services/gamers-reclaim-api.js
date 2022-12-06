import axios from "axios";

const DEV_API_URL = "http://localhost:4000/api/";
const API_URL = `https://gamers-reclaim.onrender.com/api/`;

export const usersController = axios.create({
  baseURL: API_URL + "users/",
});

export const productsController = axios.create({
  baseURL: API_URL + "products/",
});

export const categoriesController = axios.create({
  baseURL: API_URL + "categories/",
});

export const cartItemsController = axios.create({
  baseURL: API_URL + "cartItems/",
});

export const ordersController = axios.create({
  baseURL: API_URL + "orders/",
});
