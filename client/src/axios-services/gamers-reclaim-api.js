import axios from "axios";

const API_URL = "http://localhost:4000/api/";

export const usersController = axios.create({
  baseURL: API_URL + "users/",
});

export const productsController = axios.create({
  baseURL: API_URL + "products/",
});

export const categoriesController = axios.create({
  baseURL: API_URL + "categories/",
});
