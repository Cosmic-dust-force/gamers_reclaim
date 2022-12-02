import { ordersController } from "./gamers-reclaim-api";
import { handleErrors } from "./common";

async function getAll(token) {
  try {
    const serverResponse = await ordersController.get(``, {
      headers: { authorization: `Bearer ${token}` },
    });

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}

async function createOrder(token) {
  try {
    const serverResponse = await ordersController.post(
      ``,
      {},
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}

export { getAll, createOrder };
