import axios from "axios";

const { BASE_URL = "http://localhost:4000" } = process.env;
const API_URL = `${BASE_URL}/api/`;

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
