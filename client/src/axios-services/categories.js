import { categoriesController } from "./gamers-reclaim-api";
import { handleErrors } from "./common";

async function getAll() {
  try {
    const serverResponse = await categoriesController.get("");

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}

export { getAll };
