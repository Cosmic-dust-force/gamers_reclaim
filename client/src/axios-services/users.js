import { usersController } from "./gamers-reclaim-api";
import { handleErrors } from "./common";

export async function login(email, password) {
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
}