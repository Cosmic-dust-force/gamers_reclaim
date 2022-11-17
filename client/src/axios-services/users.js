import { usersController } from "./gamers-reclaim-api";
import { handleErrors } from "./common";

async function login(email, password) {
  try {
    const serverResponse = await usersController.post(`login`, {
      email,
      password,
    });

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
};

async function register(user) {
  try {
    const serverResponse = await usersController.post(`register`, user);
    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}

export { login, register };
